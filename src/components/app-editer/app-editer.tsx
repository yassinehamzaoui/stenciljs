import { Component, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
@Component({
  tag: 'app-editer',
  styleUrl: '../../global/global.css',
  shadow: true
})
export class AppDetails {
    @Prop() match: MatchResults;
    @Prop() history : RouterHistory;
    @State() posts : any; 
    
    InputTitle: HTMLInputElement;
    InputAuthor: HTMLInputElement;
    InputDescription: HTMLInputElement;

    componentWillLoad() {
        let url='https://polymer-101-workshop.cleverapps.io/api/blogpost/'
        let id = this.match.params.id;
        return fetch(`${url+id}`)
        .then(response => response.json())
      .then(data => {
      this.posts = data;
        });
  }
  redirect(){
    this.history.goBack();
}

  createBlogPost() {
    return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          _id: this.posts._id,
          title:  this.InputTitle.value,
          autor: this.InputAuthor.value,
          article: this.InputDescription.value,
          creationDate: this.posts.creationDate
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            alert(' ok ! edited !');
            this.redirect();
            return responseJson.movies;
          })
          .catch((error) => {
            alert(' Error ! please retry !! ');
            console.error(error);
          });
}
    handleSubmit = (ev: Event) => {
      ev.preventDefault();
      this.createBlogPost();
      this.InputAuthor.value="";
      this.InputTitle.value="";
      this.InputDescription.value="";
    }

  render() {
    return (
        <div class="columns is-centered is-multiline">
	  <div class="column is-6">
	    <div class="post">
        <div class="card-content-form">
        <form onSubmit={this.handleSubmit}>
          <div class="field">
            <label class="label">Titre :</label>
            <p class="control">
          <input class="input" type="text" ref={(el: HTMLInputElement) => this.InputTitle = el}  placeholder="Titre" required value={this.posts.title} />
            </p>
          </div>
          <div class="field">
            <label class="label">Author :</label>
            <p class="control">
          <input class="input" type="text" ref={(e2: HTMLInputElement) => this.InputAuthor = e2} placeholder="Author" required value={this.posts.autor} />
            </p>
          </div>
          <div class="field">
            <label class="label">Description :</label>
            <p class="control">
          <input class="input" type="text" ref={(e3: HTMLInputElement) => this.InputDescription = e3} placeholder="Description" required value={this.posts.article} />
            </p>
          </div>
          <div class="field is-grouped">
            <p class="control">
          <button class="button is-primary">Editer</button>
            </p>
            <p class="control">
            <stencil-route-link url='/posts/'>
          <button class="button is-black" >Annuler</button>
          </stencil-route-link>
            </p>
          </div>
        </form>
      </div>
      </div>
     </div>
    </div>
    );
  }
}