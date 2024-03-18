const req = [
	(val: string) => (val && val.length > 0) || 'Это обязательное поле',
]
const reqnum = [(val: number) => val >= 0 || 'Недопустимое значение']
const reqtrue = [() => true || 'always true']

const getMembers = (members: any[]): any[] => {
	let children = [] as any[]
	return members
		.map(mem => {
			const m = { ...mem } // use spread operator
			if (m.children && m.children.length) {
				children = [...children, ...m.children]
			}
			delete m.children // this will not affect the original array object
			return m
		})
		.concat(children.length ? getMembers(children) : children)
}

export { req, reqnum, reqtrue, getMembers }
