var t,e={Linear:{None:function(t){return t}},Quadratic:{In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}},Cubic:{In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}},Quartic:{In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}},Quintic:{In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}},Sinusoidal:{In:function(t){return 1-Math.cos(t*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return.5*(1-Math.cos(Math.PI*t))}},Exponential:{In:function(t){return 0===t?0:Math.pow(1024,t-1)},Out:function(t){return 1===t?1:1-Math.pow(2,-10*t)},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(2-Math.pow(2,-10*(t-1)))}},Circular:{In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}},Elastic:{In:function(t){return 0===t?0:1===t?1:-Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)},Out:function(t){return 0===t?0:1===t?1:Math.pow(2,-10*t)*Math.sin(5*(t-.1)*Math.PI)+1},InOut:function(t){return 0===t?0:1===t?1:(t*=2)<1?-.5*Math.pow(2,10*(t-1))*Math.sin(5*(t-1.1)*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin(5*(t-1.1)*Math.PI)+1}},Back:{In:function(t){var e=1.70158;return t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?t*t*((e+1)*t-e)*.5:.5*((t-=2)*t*((e+1)*t+e)+2)}},Bounce:{In:function(t){return 1-e.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?.5*e.Bounce.In(2*t):.5*e.Bounce.Out(2*t-1)+.5}}},i="undefined"==typeof self&&"undefined"!=typeof process&&process.hrtime?function(){var t=process.hrtime();return 1e3*t[0]+t[1]/1e6}:"undefined"!=typeof self&&void 0!==self.performance&&void 0!==self.performance.now?self.performance.now.bind(self.performance):void 0!==Date.now?Date.now:function(){return(new Date).getTime()},n=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var t=this;return Object.keys(this._tweens).map((function(e){return t._tweens[e]}))},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t},t.prototype.remove=function(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]},t.prototype.update=function(t,e){void 0===t&&(t=i()),void 0===e&&(e=!1);var n=Object.keys(this._tweens);if(0===n.length)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<n.length;r++){var s=this._tweens[n[r]],a=!e;s&&!1===s.update(t,a)&&!e&&delete this._tweens[n[r]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),r={Linear:function(t,e){var i=t.length-1,n=i*e,s=Math.floor(n),a=r.Utils.Linear;return e<0?a(t[0],t[1],n):e>1?a(t[i],t[i-1],i-n):a(t[s],t[s+1>i?i:s+1],n-s)},Bezier:function(t,e){for(var i=0,n=t.length-1,s=Math.pow,a=r.Utils.Bernstein,o=0;o<=n;o++)i+=s(1-e,n-o)*s(e,o)*t[o]*a(n,o);return i},CatmullRom:function(t,e){var i=t.length-1,n=i*e,s=Math.floor(n),a=r.Utils.CatmullRom;return t[0]===t[i]?(e<0&&(s=Math.floor(n=i*(1+e))),a(t[(s-1+i)%i],t[s],t[(s+1)%i],t[(s+2)%i],n-s)):e<0?t[0]-(a(t[0],t[0],t[1],t[1],-n)-t[0]):e>1?t[i]-(a(t[i],t[i],t[i-1],t[i-1],n-i)-t[i]):a(t[s?s-1:0],t[s],t[i<s+1?i:s+1],t[i<s+2?i:s+2],n-s)},Utils:{Linear:function(t,e,i){return(e-t)*i+t},Bernstein:function(t,e){var i=r.Utils.Factorial;return i(t)/i(e)/i(t-e)},Factorial:(t=[1],function(e){var i=1;if(t[e])return t[e];for(var n=e;n>1;n--)i*=n;return t[e]=i,i}),CatmullRom:function(t,e,i,n,r){var s=.5*(i-t),a=.5*(n-e),o=r*r;return(2*e-2*i+s+a)*(r*o)+(-3*e+3*i-2*s-a)*o+s*r+e}}},s=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),a=new n,o=function(){function t(t,i){void 0===i&&(i=a),this._object=t,this._group=i,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=e.Linear.None,this._interpolationFunction=r.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._id=s.nextId(),this._isChainStopped=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.to=function(t,e){return this._valuesEnd=Object.create(t),void 0!==e&&(this._duration=e),this},t.prototype.duration=function(t){return this._duration=t,this},t.prototype.start=function(t){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed)for(var e in this._reversed=!1,this._valuesStartRepeat)this._swapEndStartRepeatValues(e),this._valuesStart[e]=this._valuesStartRepeat[e];return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=void 0!==t?"string"==typeof t?i()+parseFloat(t):t:i(),this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this},t.prototype._setupProperties=function(t,e,i,n){for(var r in i){var s=t[r],a=Array.isArray(s),o=a?"array":typeof s,u=!a&&Array.isArray(i[r]);if("undefined"!==o&&"function"!==o){if(u){var h=i[r];if(0===h.length)continue;h=h.map(this._handleRelativeValue.bind(this,s)),i[r]=[s].concat(h)}if("object"!==o&&!a||!s||u)void 0===e[r]&&(e[r]=s),a||(e[r]*=1),n[r]=u?i[r].slice().reverse():e[r]||0;else{for(var p in e[r]=a?[]:{},s)e[r][p]=s[p];n[r]=a?[]:{},this._setupProperties(s,e[r],i[r],n[r])}}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(t){return void 0===t&&(t=i()),this._isPaused||!this._isPlaying||(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this)),this},t.prototype.resume=function(t){return void 0===t&&(t=i()),this._isPaused&&this._isPlaying?(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this):this},t.prototype.stopChainedTweens=function(){for(var t=0,e=this._chainedTweens.length;t<e;t++)this._chainedTweens[t].stop();return this},t.prototype.group=function(t){return this._group=t,this},t.prototype.delay=function(t){return this._delayTime=t,this},t.prototype.repeat=function(t){return this._initialRepeat=t,this._repeat=t,this},t.prototype.repeatDelay=function(t){return this._repeatDelayTime=t,this},t.prototype.yoyo=function(t){return this._yoyo=t,this},t.prototype.easing=function(t){return this._easingFunction=t,this},t.prototype.interpolation=function(t){return this._interpolationFunction=t,this},t.prototype.chain=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return this._chainedTweens=t,this},t.prototype.onStart=function(t){return this._onStartCallback=t,this},t.prototype.onUpdate=function(t){return this._onUpdateCallback=t,this},t.prototype.onRepeat=function(t){return this._onRepeatCallback=t,this},t.prototype.onComplete=function(t){return this._onCompleteCallback=t,this},t.prototype.onStop=function(t){return this._onStopCallback=t,this},t.prototype.update=function(t,e){if(void 0===t&&(t=i()),void 0===e&&(e=!0),this._isPaused)return!0;var n,r,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>s)return!1;e&&this.start(t)}if(this._goToEnd=!1,t<this._startTime)return!0;!1===this._onStartCallbackFired&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),r=(t-this._startTime)/this._duration,r=0===this._duration||r>1?1:r;var a=this._easingFunction(r);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,a),this._onUpdateCallback&&this._onUpdateCallback(this._object,r),1===r){if(this._repeat>0){for(n in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat)this._yoyo||"string"!=typeof this._valuesEnd[n]||(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),void 0!==this._repeatDelayTime?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var o=0,u=this._chainedTweens.length;o<u;o++)this._chainedTweens[o].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(t,e,i,n){for(var r in i)if(void 0!==e[r]){var s=e[r]||0,a=i[r],o=Array.isArray(t[r]),u=Array.isArray(a);!o&&u?t[r]=this._interpolationFunction(a,n):"object"==typeof a&&a?this._updateProperties(t[r],s,a,n):"number"==typeof(a=this._handleRelativeValue(s,a))&&(t[r]=s+(a-s)*n)}},t.prototype._handleRelativeValue=function(t,e){return"string"!=typeof e?e:"+"===e.charAt(0)||"-"===e.charAt(0)?t+parseFloat(e):parseFloat(e)},t.prototype._swapEndStartRepeatValues=function(t){var e=this._valuesStartRepeat[t],i=this._valuesEnd[t];this._valuesStartRepeat[t]="string"==typeof i?this._valuesStartRepeat[t]+parseFloat(i):this._valuesEnd[t],this._valuesEnd[t]=e},t}(),u=a;u.getAll.bind(u),u.removeAll.bind(u),u.add.bind(u),u.remove.bind(u);var h=u.update.bind(u);export{o as T,h as u};
