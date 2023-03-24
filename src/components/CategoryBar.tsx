import styles from '../assets/CategoryBar.module.css'

export const CategoryBar = ({
	onSetPrimary,
	categories,
	onRemoveCategory,
	primaryCategory
}:any)=>{

	const categoryNames = Object.keys(categories).reverse()

	const isPrimary = (category:string) => category===primaryCategory
	
	return (
		<div className={styles.container}>
			{
				...categoryNames
					.map(name =>
						<div 
							className={
								styles.nav_item
								+" "+(isPrimary(name)&&styles.primary)
							} 
							key={name}
							id={name}
							onClick={()=>onSetPrimary(name)}>
							<span className={styles.category_name}>
								{name}
							</span>
							<span 
								className={styles.category_btn}
								data-category={name}
								onClick={(e)=>onRemoveCategory(e)}>
								X
							</span>
						</div>
					)
			}
		</div>
	)	
}