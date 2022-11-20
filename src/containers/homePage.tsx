import React, { Component } from "react";
import FeedList from "../components/feed/feedList";
import Loader from "../components/loader";
import { finnhubClient } from "../api/finnhub/client";

class HomePage extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  constructor(props) {
    super(props);
  }

  getMarketNews(): void {
    this.setState({ isLoading: true });
    finnhubClient.marketNews("general", {}, (e, marketNews, r) => {
      if (!e && marketNews) {
        this.setState({
          data: marketNews,
          isLoading: false,
        });
      }
    });
  }

  componentDidMount(): void {
    this.getMarketNews();
  }

  render() {
    return (
      <section id="feeds mb-3">
        <h3 className="mb-4">Recent News</h3>
        {!this.state.isLoading && <FeedList list={this.state.data} />}
        {this.state.isLoading && <Loader />}
      </section>
    );
  }
}

export default HomePage;
