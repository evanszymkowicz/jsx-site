function reviewRight(state, actions) {
  return (
    {
      reviewIndex: {
        current: (state.reviewIndex.current >= state.reviews.length-1) ? state.reviews.length-1 : state.reviewIndex.current + 1
      }
    }
  )
}

function reviewLeft(state, actions) {
  return (
    {
      reviewIndex: {
        current: (state.reviewIndex.current <= 0) ? 0: state.reviewIndex.current - 1
      }
    }
  )
}

function showMenu(){
  return (
    {menu: 'active'}
  )
}

function closeMenu(state, actions){
  return (
    {menu: 'inactive'}
  )
}

function close(state, actions){
  return (
    {times: !state.times}
  )
}

function intro(state, actions){
  return (
    {count: state.count + 1}
  )
}

export const actions = {
  reviewRight,
  reviewLeft,
  intro,
  showMenu,
  closeMenu,
  close
}
