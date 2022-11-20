import React, { Component } from "react";
import SearchList from "../../components/resultList";
import Loader from "../../components/loader";
import { finnhubClient } from "../../api/finnhub/client";
import { withRouter } from "../../utils";

const queryString = require('query-string');


class SearchResults extends Component {
  state = {
    data: [],
    isLoading: false,
  };

  props: Readonly<{ location: { search: string }}>;

  getSymbolSearch(): void {
    const params = queryString.parse(this.props.location.search);

    if (!params.stock) {
      return;
    }
    this.setState({ isLoading: true });
    finnhubClient.symbolSearch(params.stock, (e, symbolSearch) => {
      if (!e && symbolSearch) {
        this.setState({
          data: symbolSearch.result,
          isLoading: false,
        });
      }
    });
  }

  componentDidMount(): void {
    this.getSymbolSearch();
  }

  componentDidUpdate(
    prevProps: Readonly<{ location: { search: string }}>
  ): void {
    const prevParams = queryString.parse(prevProps.location.search);
    const params = queryString.parse(this.props.location.search);
    if (params.stock !== prevParams.stock) {
      this.getSymbolSearch();
    }
  }

  render() {
    return (
      <section id="search-results" className="col-12 col-md-8 mx-auto">
        <h3 className="mb-4">Stocks Found</h3>
        {!this.state.isLoading && <SearchList list={this.state.data} />}
        {this.state.isLoading && <Loader />}
      </section>
    );
  }
}

export default withRouter(SearchResults);
