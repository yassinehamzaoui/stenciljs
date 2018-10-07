import { Component, State } from '@stencil/core';

@Component({
  tag: 'app-posts',
  styleUrl: '../../global/global.css',
  shadow: true
})

export class AppPosts {

    @State() posts: any = "";

    componentWillLoad() {
      return fetch('https://polymer-101-workshop.cleverapps.io/api/blogpost/')
      .then(response => response.json())
      .then(data => {
      this.posts = data;
      });
      }

      trim(str: string) {
        if(str===null){
          return "Text null"
        } else {
          let r = Math.min(141, str.length);
          let point = str.length <= 140 ? "" : "...";
          return str.substring(0, r) + point;
        }
    
      }
    render() {
      return (
        <div> 
        {    this.posts.map((item) => { 
           if(item.title != "" &&  item.autor != "" && item.article != "")
           return (
                 <div class="main-content">
                  <div class="container">
                  <div class="columns is-centered is-multiline">
                  <div class="column is-6">
                  <div class="post">
          	      <div class="content">
                  <div class="content-header has-text-centered">
                    <h3 class="title is-3"><b><a>{item.title}</a></b></h3>
                    <h4 class="title is-4 is-spaced"></h4>
                    <h6 class="subtitle is-6">Posted By {item.autor} date : {item.creationDate}</h6>
                    <hr/>
                  </div>
                  <p>{this.trim(item.article)}</p>
                  </div>
          <stencil-route-link url={`/details/${item._id}`}>
          <nav class="has-text-right">
	        <a class="button is-info">Détails</a>
	        </nav>
          </stencil-route-link>
                  </div>
                  </div>
                  </div>
                  </div>
                  </div>	
        )} 
      )}
      </div>
    );
  }
}