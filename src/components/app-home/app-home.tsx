import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: '../../global/global.css',
  shadow: true
})
export class AppHome {
  componentWillLoad() {
    }
  render() {
    return (
      <div>
        <div class="box has-text-centered">
        <header>
          <h1>Welcome to the blog</h1>
        </header>
        <br></br>
        <p>
          Welcome to the professional blog !! 
        </p>
        <br></br>
        <stencil-route-link url='/newpost/'>
          <button class="button is-info">
          New Post
          </button>
          <br></br>
        </stencil-route-link>
        <br></br>
        <stencil-route-link url='/posts/'>
          <button class="button is-info">
          ALL POSTS
          </button>
        </stencil-route-link>
      </div>
      </div>
    );
  }
}
