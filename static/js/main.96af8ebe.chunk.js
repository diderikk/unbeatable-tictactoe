(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";function r(t){for(var e=0;e<3;e++){if(t[e]===t[e+3]&&t[e]===t[e+6]&&t[e])return t[e];if(t[3*e]===t[3*e+1]&&t[3*e]===t[3*e+2]&&t[3*e])return t[3*e]}return t[0]===t[4]&&t[0]===t[8]&&t[0]?t[0]:t[2]===t[4]&&t[2]===t[6]&&t[2]?t[2]:null}function a(t){for(var e=0,n=0;n<t.length;n++)t[n]||e++;return e}function i(t,e,n,s,c){var l=r(t);if(0===a(t)||l)return s.count++,l===c?-10+e:l?10-e:0;if(n){for(var u=-1/0,o=0;o<t.length;o++)if(!t[o]){var d=t.slice();d[o]="X"===c?"O":"X";var h=i(d,e+1,!1,s,c);h===u&&0===e&&s.bestMoves.push({index:o,evaluation:h}),h>u&&(u=h,0===e&&(s.bestMoves=[],s.bestMoves.push({index:o,evaluation:h})))}if(0===e){var b=Math.floor(Math.random()*s.bestMoves.length);return s.bestMoves.splice(b,1)[0].index}return u}for(var j=1/0,v=0;v<t.length;v++)if(!t[v]){var f=t.slice();f[v]="X"===c?"X":"O";var x=i(f,e+1,!0,s,c);x<j&&(j=x)}return j}function s(t,e,n,i,c,l,u){var o=r(t);if(0===a(t)||o)return l.count++,o===u?-10+e:o?10-e:0;if(c){for(var d=-1/0,h=0;h<t.length;h++)if(!t[h]){var b=t.slice();b[h]="X"===u?"O":"X";var j=s(b,e+1,n,i,!1,l,u);if(j===d&&0===e&&l.bestMoves.push({index:h,evaluation:j}),j>d&&(d=j,0===e&&(l.bestMoves=[],l.bestMoves.push({index:h,evaluation:j}))),i<=(n=Math.max(n,j)))break}return d}for(var v=1/0,f=0;f<t.length;f++)if(!t[f]){var x=t.slice();x[f]="X"===u?"X":"O";var m=s(x,e+1,n,i,!0,l,u);if(m<v&&(v=m),(i=Math.min(i,m))<=n)break}return v}n.r(e),n.d(e,"findWinner",(function(){return r})),n.d(e,"emptySpaces",(function(){return a})),n.d(e,"minimax",(function(){return i})),n.d(e,"minimaxPruned",(function(){return s}))},9:function(t,e,n){"use strict";n.r(e);var r=n(4),a=n(5),i=n(1),s=n(8),c=n(7),l=n(0),u=n(2),o=n.n(u),d=n(6),h=n.n(d),b=(n(15),n(16)),j={count:0,bestMoves:[]},v=function(t){return Object(l.jsxs)("div",{className:"moveList",children:[Object(l.jsxs)("p",{children:["Other moves ","({Index:Evaluation})",": "]}),Object(l.jsx)("ul",{children:j.bestMoves.map((function(t){return Object(l.jsx)("li",{children:"{".concat(t.index,": ").concat(t.evaluation,"}, ")},t.index)}))})]})},f=function(t){return Object(l.jsx)("button",{className:"square",onClick:t.onClick,children:t.value})},x=function(t){return Object(l.jsxs)("div",{className:"selectPlay",children:[Object(l.jsxs)("button",{id:"switchType",onClick:t.buttonPlayerHandle,children:["Switch to: ","X"===t.player?"O":"X"]}),Object(l.jsx)("button",{onClick:t.buttonFirstHandle,children:t.playFirst?"Play Second":"Play First"}),Object(l.jsx)("button",{onClick:t.buttonPlayAgainHandle,children:"Play Again"})]})},m=function(t){Object(s.a)(n,t);var e=Object(c.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={board:Array(9).fill(null),player:"X",playFirst:!1,counter:{count:0,bestMoves:[]}},a.renderSquare=a.renderSquare.bind(Object(i.a)(a)),a.minmaxHandle=a.minmaxHandle.bind(Object(i.a)(a)),a.handleButton=a.handleButton.bind(Object(i.a)(a)),a}return Object(a.a)(n,[{key:"handleButton",value:function(){this.setState({player:"X"===this.state.player?"O":"X",board:Array(9).fill(null),counter:{count:0}}),j.count=0}},{key:"handlePlayButton",value:function(){this.setState({playFirst:!this.state.playFirst,board:Array(9).fill(null),counter:{count:0}}),j.count=0}},{key:"handlePlayAgainButton",value:function(){this.setState({board:Array(9).fill(null),counter:{count:0}}),j.count=0}},{key:"minmaxHandle",value:function(t){j.count=0,this.setState((function(t){var e=Object.assign({},t.counter);return e.count=0,{c:e}}));var e=this.state.board.slice();if(!b.findWinner(e)&&!e[t]){e[t]=this.state.player;var n=b.minimax(e,0,!0,j,this.state.player);b.minimaxPruned(e,0,-1/0,1/0,!0,this.state.counter,this.state.player),0!==b.emptySpaces(e)&&(e[n]="X"===this.state.player?"O":"X"),this.setState({board:e})}}},{key:"renderSquare",value:function(t){var e=this;return Object(l.jsx)(f,{value:this.state.board[t],onClick:function(){return e.minmaxHandle(t)}})}},{key:"render",value:function(){var t=this,e=b.findWinner(this.state.board),n=Object(l.jsxs)("h2",{children:["Next move: ",Object(l.jsx)("h1",{children:"X"===this.state.player?"X":"O"})]});e?n=Object(l.jsxs)("h2",{children:["Winner: ",Object(l.jsx)("h1",{children:e})]}):0===b.emptySpaces(this.state.board)&&(n=Object(l.jsx)("h1",{children:"Stalemate"}));var r=Object(l.jsxs)("p",{children:["Games computed: ",j.count]}),a=Object(l.jsxs)("p",{children:["Games computed (optimized): ",this.state.counter.count]});if(!this.state.playFirst&&9===b.emptySpaces(this.state.board)){var i=this.state.board.slice(),s=b.minimax(i,0,!0,j,this.state.player);b.minimaxPruned(i,0,-1/0,1/0,!0,this.state.counter,this.state.player),i[s]="X"===this.state.player?"O":"X",this.setState({board:i})}return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(x,{player:this.state.player,playFirst:this.state.playFirst,buttonPlayerHandle:function(){return t.handleButton()},buttonFirstHandle:function(){return t.handlePlayButton()},buttonPlayAgainHandle:function(){return t.handlePlayAgainButton()}}),Object(l.jsxs)("div",{className:"board",children:[Object(l.jsx)("div",{className:"status",children:n}),Object(l.jsxs)("div",{className:"row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(l.jsxs)("div",{className:"row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(l.jsxs)("div",{className:"row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]}),Object(l.jsxs)("footer",{children:[Object(l.jsx)("hr",{}),Object(l.jsxs)("div",{className:"footerContainer",children:[Object(l.jsxs)("div",{className:"gc",children:[Object(l.jsx)("div",{id:"gc1",children:r}),Object(l.jsx)("div",{id:"gc2",children:a})]}),Object(l.jsx)(v,{})]})]})]})]})}}]),n}(o.a.Component);h.a.render(Object(l.jsx)(m,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.96af8ebe.chunk.js.map