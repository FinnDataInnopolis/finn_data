import React, { Component } from "react";
import Financials from "../../components/financials";
import StockCard from "../../components/stockCard";
import { SOCKET_URL } from "../../api/finnhub/consts";
import { finnhubClient } from "../../api/finnhub/client";
import { withRouter } from "../../utils";

class StockProfile extends Component {
  state = {
    name: "",
    ticker: "",
    currency: "",
    country: "",
    exchange: "",
    price: "",
    tenDayAverageTradingVolume: "",
    fiftyTwoWeekHigh: "",
    fiftyTwoWeekLow: "",
    fiftyTwoWeekLowDate: "",
    fiftyTwoWeekPriceReturnDaily: "",
    beta: "",
  };
  symbol = undefined;
  socket = undefined;

  constructor(props: Readonly<{ location: { pathname: string }}>) {
    super(props);

    // Init symbol 
    this.symbol = props.location.pathname.replace("/search/", "");

    // Init socket
    this.socket = new WebSocket(SOCKET_URL);
  }

  getCompanyProfile(): void {
    finnhubClient.companyProfile2({'symbol': this.symbol}, (e, companyProfile, r) => {
      this.setState({
        ...this.state,
        name: companyProfile.name,
        ticker: companyProfile.ticker,
        currency: companyProfile.currency,
        country: companyProfile.country,
        exchange: companyProfile.exchange,
      });
    });
  }

  getQuote(): void {
    finnhubClient.quote(this.symbol, (e, quote, r) => {
      this.setState({
        ...this.state,
        price: quote.c,
      });
    });
  }

  getFinancials(): void {
    finnhubClient.companyBasicFinancials(this.symbol, "all", (e, financials, r) => {
      const metric = financials.metric;
      this.setState({
        ...this.state,
        tenDayAverageTradingVolume: metric["10DayAverageTradingVolume"],
        fiftyTwoWeekHigh: metric["52WeekHigh"],
        fiftyTwoWeekLow: metric["52WeekLow"],
        fiftyTwoWeekLowDate: metric["52WeekLowDate"],
        fiftyTwoWeekPriceReturnDaily: metric["52WeekPriceReturnDaily"],
        beta: metric["beta"],
      });
    });
  }

  openWebSocket(): void {
    const socket = this.socket;
    const symbol = this.symbol;

    socket.addEventListener("open", (e) => {
      socket.send(JSON.stringify({"type": "subscribe", "symbol": symbol}))
    });

    socket.addEventListener("message", (e) => {
      const data = JSON.parse(e.data);
      if (data.type === "trade" && data.data.length > 0) {
        this.setState({
          ...this.state,
          price: data.data[0].p,
        });
      };
    });
  }

  closeWebSocket(): void {
    this.socket.send(JSON.stringify({"type": "unsubscribe", "symbol": this.symbol}))
  }

  componentDidMount(): void {
    this.getCompanyProfile();
    this.getQuote();
    this.getFinancials();
    this.openWebSocket();
  }

  componentWillUnmount(): void {
    this.closeWebSocket();
  }

  render() {
    return (
      <section id="stock-profile">
        {/* stock info */}
        <StockCard
          name={ this.state.name }
          ticker={ this.state.ticker }
          currency={ this.state.currency }
          country={ this.state.country }
          exchange={ this.state.exchange }
          price={ this.state.price }
        />
        {/* financial section */}
        <h3 className="my-4">Financials</h3>
        <Financials
          tenDayAverageTradingVolume={ this.state.tenDayAverageTradingVolume }
          fiftyTwoWeekHigh={ this.state.fiftyTwoWeekHigh }
          fiftyTwoWeekLow={ this.state.fiftyTwoWeekLow }
          fiftyTwoWeekLowDate={ this.state.fiftyTwoWeekLowDate }
          fiftyTwoWeekPriceReturnDaily={ this.state.fiftyTwoWeekPriceReturnDaily }
          beta={ this.state.beta }
        />
      </section>
    );
  }

}

export default withRouter(StockProfile);
