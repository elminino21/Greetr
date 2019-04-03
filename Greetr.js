(function(global, $){

    var Greetr = function(first, last, lang){
  
      return new Greetr.init(first, last, lang);
    }
    var supportedLangs = ['en', 'es'];
    var greetings = {
        en: 'Hello', 
        es: 'Hola'
    };
    var formalGreetings = {
      en: 'Greeting',
      es:'Saludos'
    };

    var logMessages = {
        en: 'Logged in',
        es: 'Inicio Session'
    };

    Greetr.prototype = {

      fullName: function(){
        return this.first + ' ' + this.last;
      },

      validate: function(){
       if( supportedLangs.indexOf(this.language) === -1 ) {
         throw 'Invalid Language';
       }

      },

      greeting: function () {
       return greetings[this.language] + ' ' + this.first + '!' ;
      },

      formalGreetings: function () {
       return formalGreetings[this.language] + ' ' + this.fullName() + '!' ;
      },

      greet: function (formal) {
        var msg; 
          if(formal){
            msg = this.formalGreetings();
          }else {
            msg = this.greeting();
          }

          if(console){
            console.log(msg);
          }
            
          return this;
      }, 

      log: function () {
        if(console) {
          console.log(logMessages[this.language] +' '+ this.fullName());
        }else {
          throw 'invalid lang';
        }
        return this;
      }, 
      setLang: function (lang) {
       if(!this.supportedLangs[lang] === -1) {
        this.language = lang;
       }
       return this;
      }

    }; //#endregion prototy ends 

     Greetr.init = function(name, lastName, language){
      var self = this;
       self.first = name || '';
       self.last = lastName || '';
       self.language = language || 'en';
    }
  
    Greetr.init.prototype = Greetr.prototype;
  
    global.Greetr = global.G$ = Greetr;
  
  }(window, jQuery));