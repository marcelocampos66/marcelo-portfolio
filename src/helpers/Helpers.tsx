class Helpers {

  getDataFromStorage() {
    if (!localStorage.getItem('marcelotheme')) {
      const obj = { theme: true };
      localStorage.setItem('marcelotheme', JSON.stringify(obj));
    }
    const data = JSON.parse(localStorage.getItem('marcelotheme')!);
    return data;
  }

}

export default new Helpers();
