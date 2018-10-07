import { Component, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
@Component({
  tag: 'app-details',
  styleUrl: '../../global/global.css',
  shadow: true
})

export class AppDetails {
    @Prop() match: MatchResults;
    @Prop() history : RouterHistory;
    @State() posts : any;
    
    redirect(){
        this.history.goBack();
    }


    deletefnct(){
        let url='https://polymer-101-workshop.cleverapps.io/api/blogpost/'
        let id = this.match.params.id;
        return fetch((`${url+id}`),{
        method:'DELETE',headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }}).then(() => {alert("Deleted !!");
          this.redirect();}
            ).catch((error) => {
            alert(' Error ! please retry !! ');
            console.error(error);
          });
    }
    
    componentWillLoad() {
        let url='https://polymer-101-workshop.cleverapps.io/api/blogpost/'
        let id = this.match.params.id;
        return fetch(`${url+id}`)
        .then(response => response.json())
      .then(data => {
      this.posts = data;
        });
  }
    
    render() {
        return (
        <div> 
        <div class="main-content">
                  <div class="container">
                  <div class="columns is-centered is-multiline">
                  <div class="column is-6">
                  <div class="post">
          	      <div class="content">
                  <div class="content-header has-text-centered">
                    <h3 class="title is-3"><b><a href="/">{this.posts.title}</a></b></h3>
                    <h4 class="title is-4 is-spaced"></h4>
                    <h6 class="subtitle is-6">Posted By {this.posts.autor} date : {this.posts.creationDate}</h6>
                    <hr/>
                  </div>
                  <p>{this.posts.article}</p>
                  </div>
            <hr/>
          <div class="field is-grouped">
            <p class="control">
          <button class="button is-danger" onClick={() => this.deletefnct()}>Supprimer</button>
            </p>
            <p class="control">
            <stencil-route-link url={`/editer/${this.posts._id}`}>
          <button class="button is-warning" >Editer</button>
          </stencil-route-link>
            </p>
            <p class="control">
            <stencil-route-link url='/posts/'>
          <button class="button is-black" >Retour</button>
          </stencil-route-link>
            </p>
          </div>

          </div>
	        </div>
          </div>
          </div>
          </div>
      </div>
    );
  }
}