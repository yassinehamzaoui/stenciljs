import { Component, Prop } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-newpost',
  styleUrl: '../../global/global.css',
  shadow: true
})

export class AppDetails {
    @Prop() history : RouterHistory;

    InputTitle: HTMLInputElement;
    InputAuthor: HTMLInputElement;
    InputDescription: HTMLInputElement;

    redirect(){
        this.history.goBack();
    }

    handleSubmit = (ev: Event) => {
      ev.preventDefault();
      this.createBlogPost();
      this.InputAuthor.value="";
      this.InputTitle.value="";
      this.InputDescription.value="";
    }

createBlogPost() {
    return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  
          title:  this.InputTitle.value,
          autor: this.InputAuthor.value,
          article: this.InputDescription.value
        }),
      }).then((response) => response.json())
          .then((responseJson) => {
            alert(' ok ! submited !');
            this.redirect();
            return responseJson.movies;
          })
          .catch((error) => {
            alert(' Error ! please retry !! ');
            console.error(error);
          });
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
          <input class="input" type="text" ref={(el: HTMLInputElement) => this.InputTitle = el}  placeholder="Titre" required value="" />
            </p>
          </div>
          <div class="field">
            <label class="label">Author :</label>
            <p class="control">
          <input class="input" type="text" ref={(e2: HTMLInputElement) => this.InputAuthor = e2} placeholder="Author" required value="" />
            </p>
          </div>
          <div class="field">
            <label class="label">Description :</label>
            <p class="control">
          <input class="input" type="text" ref={(e3: HTMLInputElement) => this.InputDescription = e3 } placeholder="Description" required value="" />
            </p>
          </div>
          <div class="field is-grouped">
            <p class="control">
          <button class="button is-primary">Ajouter</button>
            </p>
            <p class="control">
            <stencil-route-link url='/'>
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