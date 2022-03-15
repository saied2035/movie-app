const activateItemListStyle = (target) => {
	if(target.classList.contains('.bold-underline')) return;

	const activeItem = document.querySelector('.bold-underline')
	activeItem.classList.remove('bold-underline')
	target.classList.add('bold-underline')

}
export default activateItemListStyle