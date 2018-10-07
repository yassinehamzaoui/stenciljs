import { Component } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: '../../global/global.css',
  shadow: true
})
export class AppHeader {
    render() {
        return (
    <div class="header-wrapper">
      <section class="hero-top">
	<div class="header">
	  <div class="header-nav">
	    <nav class="nav">
	      <div class="nav-center">
		<a class="nav-item" href="/">
		  <b>Home</b>
		</a>
		<a class="nav-item" href="/posts/">
		  <b>All Posts</b>
		</a>
		<a class="nav-item" href="/newpost/">
		  <b>New Post</b>
		</a>
	      </div>
	    </nav>
	  </div>
	  <div class="header-title">
	    <section class="hero is-medium has-text-centered">
	      <div class="hero-body">
		<div class="container">
		  <h1 class="title is-1">Bulma Copy</h1>
		  <h3 class="subtitle is-3">Something Important</h3>
		</div>
	      </div>
	    </section>
	  </div>

	</div>
      </section>
    </div>
        );
}
}