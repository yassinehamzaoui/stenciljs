/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  MatchResults,
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface AppDetails {
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface AppDetailsAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface AppEditer {
    'history': RouterHistory;
    'match': MatchResults;
  }
  interface AppEditerAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
    'match'?: MatchResults;
  }

  interface AppFooter {}
  interface AppFooterAttributes extends StencilHTMLAttributes {}

  interface AppHeader {}
  interface AppHeaderAttributes extends StencilHTMLAttributes {}

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppNewpost {
    'history': RouterHistory;
  }
  interface AppNewpostAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface AppPosts {}
  interface AppPostsAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'match': MatchResults;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'match'?: MatchResults;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppDetails': Components.AppDetails;
    'AppEditer': Components.AppEditer;
    'AppFooter': Components.AppFooter;
    'AppHeader': Components.AppHeader;
    'AppHome': Components.AppHome;
    'AppNewpost': Components.AppNewpost;
    'AppPosts': Components.AppPosts;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
  }

  interface StencilIntrinsicElements {
    'app-details': Components.AppDetailsAttributes;
    'app-editer': Components.AppEditerAttributes;
    'app-footer': Components.AppFooterAttributes;
    'app-header': Components.AppHeaderAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-newpost': Components.AppNewpostAttributes;
    'app-posts': Components.AppPostsAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
  }


  interface HTMLAppDetailsElement extends Components.AppDetails, HTMLStencilElement {}
  var HTMLAppDetailsElement: {
    prototype: HTMLAppDetailsElement;
    new (): HTMLAppDetailsElement;
  };

  interface HTMLAppEditerElement extends Components.AppEditer, HTMLStencilElement {}
  var HTMLAppEditerElement: {
    prototype: HTMLAppEditerElement;
    new (): HTMLAppEditerElement;
  };

  interface HTMLAppFooterElement extends Components.AppFooter, HTMLStencilElement {}
  var HTMLAppFooterElement: {
    prototype: HTMLAppFooterElement;
    new (): HTMLAppFooterElement;
  };

  interface HTMLAppHeaderElement extends Components.AppHeader, HTMLStencilElement {}
  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppNewpostElement extends Components.AppNewpost, HTMLStencilElement {}
  var HTMLAppNewpostElement: {
    prototype: HTMLAppNewpostElement;
    new (): HTMLAppNewpostElement;
  };

  interface HTMLAppPostsElement extends Components.AppPosts, HTMLStencilElement {}
  var HTMLAppPostsElement: {
    prototype: HTMLAppPostsElement;
    new (): HTMLAppPostsElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementTagNameMap {
    'app-details': HTMLAppDetailsElement
    'app-editer': HTMLAppEditerElement
    'app-footer': HTMLAppFooterElement
    'app-header': HTMLAppHeaderElement
    'app-home': HTMLAppHomeElement
    'app-newpost': HTMLAppNewpostElement
    'app-posts': HTMLAppPostsElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-details': HTMLAppDetailsElement;
    'app-editer': HTMLAppEditerElement;
    'app-footer': HTMLAppFooterElement;
    'app-header': HTMLAppHeaderElement;
    'app-home': HTMLAppHomeElement;
    'app-newpost': HTMLAppNewpostElement;
    'app-posts': HTMLAppPostsElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
