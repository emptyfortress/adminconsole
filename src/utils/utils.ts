const req = [(val: string) => (val && val.length > 0) || 'Это обязательное поле']
const reqnum = [(val: number) => val >= 0 || 'Недопустимое значение']

export { req, reqnum }
