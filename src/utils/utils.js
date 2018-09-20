function classNames(...className) {
	
  return className.filter(item => typeof item === typeof '').join(' ');
}

export { classNames };
