document.addEventListener('DOMContentLoaded', () => {
  const data = {
    work: {
      day: {
        current: "5hrs",
        previous: "7hrs"
      },
      week: {
        current: "32hrs",
        previous: "36hrs"
      },
      month: {
        current: "103hrs",
        previous: "128hrs"
      }
    },
    play: {
      day: {
        current: "1hr",
        previous: "2hrs",
      },
      week: {
        current: "10hrs",
        previous: "8hrs",
      },
      month: {
        current: "23hrs",
        previous: "29hrs",
      }
    },
    study: {
      day: {
        current: "0hrs",
        previous: "1hr",
      },
      week: {
        current: "4hrs",
        previous: "7hrs",
      },
      month: {
        current: "13hrs",
        previous: "19hrs",
      }
    },
    exercise: {
      day: {
        current: "1hr",
        previous: "1hr",
      },
      week: {
        current: "4hrs",
        previous: "5hrs",
      },
      month: {
        current: "11hrs",
        previous: "18hrs",
      }
    },
    social: {
      day: {
        current: "1hr",
        previous: "3hrs",
      },
      week: {
        current: "5hrs",
        previous: "10hrs",
      },
      month: {
        current: "21hrs",
        previous: "23hrs",
      }
    },
    self_care: {
      day: {
        current: "0hrs",
        previous: "1hr",
      },
      week: {
        current: "2hrs",
        previous: "2hrs",
      },
      month: {
        current: "7hrs",
        previous: "11hrs",
      }
    },
  };
  var triggers = document.querySelectorAll('.selection');
  if (triggers) {
    triggers.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        var set = el.dataset.value;
        for (const [k,v] of Object.entries(data)) {
          var elem = document.getElementById(k);
          var title = elem.querySelector('.title h1');
          var basis = elem.querySelector('.title p .timespan');
          var last = elem.querySelector('.title p .time');
          var updateData = v;
          for (const [key,val] of Object.entries(v)) {
            if (set == key) {
              title.innerText = val.current;
              basis.innerText = key;
              last.innerText = val.previous;
            }
          }
        }
        var activeTrigger = document.querySelector('.selection.is-active');
        if (activeTrigger) {
          activeTrigger.classList.remove('is-active');
        }
        el.classList.add('is-active');
      })
    })
  }
})