let alreadyAdded = false;

export default function(history) {
  if (alreadyAdded) {
    console.log('Listener already added');
    return;
  } else {
    window.addEventListener('updatePath', event => {
      console.log('pushing to history');
      history.push('/via/' + event.detail.id);
    });
    alreadyAdded = true;
  }
}
