interface Rule {
	id: number
	name: string
	type: string
	ext?: string
	size1?: number
	size2?: number
	expanded?: boolean
	list: Group[]
}

interface Group {
	id: number
	name: string
	expanded?: boolean
	list: Hran[]
}

interface Hran {
	id: number
	name: string
	type: string
	state: string
	size: number
	main: boolean
	arch: boolean
	temp: boolean
}
