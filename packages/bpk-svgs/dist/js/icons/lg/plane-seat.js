import React from "react";
export default class SVG extends React.Component {
  render() {
    return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...this.props}><path d="M16.542 17a1.5 1.5 0 1 0 0-3H12.28a2.35 2.35 0 0 1-1.403-.468c-.39-.292-.674-.691-.85-1.229l-1.943-5.08V7H9a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H8v.027a1.495 1.495 0 0 0-2.917.473v4c0 .183.034.365.099.536l2.016 5.263a5.318 5.318 0 0 0 1.878 2.634c.287.215.6.388.923.541V20H8.584a2 2 0 0 0-2 2h9.958a2 2 0 0 0-2-2H13v-3h3.542z" /></svg>;
  }

}