import React from "react";
import ArticleSearch from "./ArticleSearch";
import ArticleList from "./ArticleList";
import Navbar from "./Navbar";
import NewArticleModalForm from "./NewArticleModalForm";
import axios from "axios";
import MyForm from "./MyForm"; 



class ArticleCollectionPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleModelAction = this.handleModelAction.bind(this);
    this.state = {
      isModalOpen: false,
      list: []
    };
  }

  fetchPosts() {
    axios
      .get("http://localhost:3000/api/posts")
      .then(response => {
        const newList = response.data;

        this.setState({
          list: newList
        });
      })
      //TODO this.setState({ list: response.data...})
      .catch(error => {
        
      });
  }

  createPost(newArticle) {
    axios
      .post("http://localhost:3000/api/posts", newArticle)
      .then(response => {
          debugger
        this.fetchPosts();
      })
      .catch(error => {});
  }

  componentDidMount() {
    this.fetchPosts();
  }

  handleModelAction(id, action, newArticle) {
    if (id === "formModal" && action === "ADD") {
      // const listClone = [...this.state.list];

      // listClone.push(newArticle);

      // this.setState({
      //     list: listClone
      // });

      this.createPost(newArticle);
    }

    this.setState({
      isModalOpen: false
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <ArticleSearch />
        <ArticleList list={this.state.list} />
        {this.state.isModalOpen ? (
          <NewArticleModalForm
            id="formModal"
            handleAction={this.handleModelAction}
          />
        ) : null}
        <button onClick={() => this.setState({ isModalOpen: true })}>
          Add Article
        </button>
        <MyForm/>
      </div>
    );
  }
}

export default ArticleCollectionPage;
