import { Component } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: '../../global/global.css',
  shadow: true
})
export class AppFooter {
    render() {
        return (
            <div class="footer">
            <div class="container">
          <div class="has-text-centered">
            <div class="nav-center">
              <a class="nav-item">
              <span class="icon">
                <i class="fa fa-twitter"></i>
              </span>
              </a>
              <a class="nav-item">
              <span class="icon">
                <i class="fa fa-facebook"></i>
              </span>
              </a>
              <a class="nav-item">
              <span class="icon">
                <i class="fa fa-github"></i>
              </span>
              </a>
            </div>
            <p>template by <a href="http://github.com/plasticneko">github.com/plasticneko</a></p>
          </div>
            </div>
          </div>
            );
        }
}