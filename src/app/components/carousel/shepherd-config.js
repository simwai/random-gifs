export const shepherdConfig = {
  defaultStepOptions: {
    // classes: 'hover-settings previous-gif next-gif',
    scrollTo: false,
    cancelIcon: {
      enabled: true
    }
  },
  defaultSteps: [{
    id: 'settings-click',
    attachTo: {
      element: '#settings-click',
      on: 'bottom'
    },
    // beforeShowPromise() {
    //   return new Promise(function(resolve) {
    //     setTimeout(function() {
    //       window.scrollTo(0, 0)
    //       resolve()
    //     }, 500)
    //   })
    // },
    buttons: [{
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
        type: 'next'
      }
    ],
    cancelIcon: {
      enabled: true
    },
    // classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Welcome to Angular-Shepherd!',
    text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
    when: {
      show: () => {
        console.log('show step')
      },
      hide: () => {
        console.log('hide step')
      }
    }
  }, {
    id: 'previous-gif',
    attachTo: {
      element: '#previous-gif',
      on: 'bottom'
    },
    // beforeShowPromise() {
    //   return new Promise(function(resolve) {
    //     setTimeout(function() {
    //       window.scrollTo(0, 0)
    //       resolve()
    //     }, 500)
    //   })
    // },
    buttons: [{
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
        type: 'next'
      }
    ],
    cancelIcon: {
      enabled: true
    },
    // classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Welcome to Angular-Shepherd!',
    text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
    when: {
      show: () => {
        console.log('show step')
      },
      hide: () => {
        console.log('hide step')
      }
    }
  }, {
    id: 'next-gif',
    attachTo: {
      element: '#next-gif',
      on: 'bottom'
    },
    // beforeShowPromise() {
    //   return new Promise(function(resolve) {
    //     setTimeout(function() {
    //       window.scrollTo(0, 0)
    //       resolve()
    //     }, 500)
    //   })
    // },
    buttons: [{
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
        type: 'next'
      }
    ],
    cancelIcon: {
      enabled: true
    },
    // classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Welcome to Angular-Shepherd!',
    text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
    when: {
      show: () => {
        console.log('show step')
      },
      hide: () => {
        console.log('hide step')
      }
    }
  }, {
    id: '#settings-action',
    attachTo: {
      element: '#settings-action',
      on: 'bottom'
    },
    // beforeShowPromise() {
    //   return new Promise(function(resolve) {
    //     setTimeout(function() {
    //       window.scrollTo(0, 0)
    //       resolve()
    //     }, 500)
    //   })
    // },
    buttons: [{
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
        type: 'next'
      }
    ],
    cancelIcon: {
      enabled: true
    },
    // classes: 'custom-class-name-1 custom-class-name-2',
    highlightClass: 'highlight',
    scrollTo: false,
    title: 'Welcome to Angular-Shepherd!',
    text: ['Angular-Shepherd is a JavaScript library for guiding users through your Angular app.'],
    when: {
      show: () => {
        console.log('show step')
      },
      hide: () => {
        console.log('hide step')
      }
    }
  }]
}
