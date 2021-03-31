const states = {
  settingsClick: 'settings-click',
  previousGif: 'previous-gif',
  nextGif: 'next-gif',
  settingsAction: 'settings-action'
}

const setState = (stateName) => {
  return function() {
    localStorage.setItem(stateName, 'visited')
  }
}

const buttons = (stateName) => [
  {
    classes: 'shepherd-button-secondary',
    text: 'Exit',
    type: 'cancel'
  },
  {
    classes: 'shepherd-button-primary',
    text: 'Back',
    type: 'back'
  },
  {
    classes: 'shepherd-button-primary',
    text: 'Next',
    type: 'next',
    action: setState(stateName)
  }
]

export const shepherdConfig = {
  defaultStepOptions: {
    // classes: 'hover-settings previous-gif next-gif',
    scrollTo: false,
    cancelIcon: {
      enabled: true
    }
  },
  defaultSteps: [{
    id: states.settingsClick,
    attachTo: {
      element: '#' + states.settingsClick,
      on: 'bottom'
    },
    buttons: buttons(states.settingsClick),
    title: 'Welcome to Angular-Shepherd!',
    text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
    when: {
      show: setState(states.settingsClick),
      hide: setState(states.settingsAction)
    },
    beforeShowPromise() {
      return new Promise(function(resolve) {
        console.log(localStorage.getItem(states.settingsClick))
        if (localStorage.getItem(states.settingsClick) !== 'visited') {
          console.log('resolve')
          resolve()
        } else {
          // TODO find out if the thrown error can be prevented by some hacky code
          reject()
        }
      })
    },
  }, {
    id: states.previousGif,
    attachTo: {
      element: '#' + states.previousGif,
      on: 'bottom'
    },
    buttons: buttons(states.previousGif),
    title: 'Welcome to Angular-Shepherd!',
    text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
    when: {
      show: setState(states.previousGif),
      hide: setState(states.previousGif)
    }
  }, {
    id: states.nextGif,
    attachTo: {
      element: '#' + states.nextGif,
      on: 'bottom'
    },
    buttons: buttons(states.nextGif),
    title: 'Welcome to Angular-Shepherd!',
    text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
    when: {
      show: setState(states.nextGif),
      hide: setState(states.nextGif)
    }
  }, {
    id: states.settingsAction,
    attachTo: {
      element: '#' + states.settingsAction,
      on: 'bottom'
    },
    buttons: buttons(states.settingsAction),
    title: 'Welcome to Angular-Shepherd!',
    text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
    when: {
      show: setState(states.settingsAction),
      hide: setState(states.settingsAction)
    },
  }]
}


// possible config options
// beforeShowPromise() {
//   return new Promise(function(resolve) {
//     setTimeout(function() {
//       window.scrollTo(0, 0)
//       resolve()
//     }, 500)
//   })
// },
// when: {
//   show: () => {
//     console.log('show step')
//   },
//   hide: () => {
//     console.log('hide step')
//     localStorage.setItem('settings-action', 'visited')
//   }
// }
// classes: 'custom-class-name-1 custom-class-name-2',
// highlightClass: 'highlight',
