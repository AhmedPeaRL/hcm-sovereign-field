export default field => {
  field.rhythm.listen(t => {
    if (t % 10 === 0) {
      console.log('[pulse]', t);
    }
  });
};
