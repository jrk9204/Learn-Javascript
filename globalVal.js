store.subscribe(() => {
  console.log(
    'proved global val is changed',
    store.getState()
  );
});
