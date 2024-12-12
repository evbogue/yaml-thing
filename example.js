import { yaml} from './bundle.js'

const obj = {
  name: 'Ev',
  image: 'IMAGE'
}

const content = 'This is a post'

const yamled = await yaml.create(obj, content)
console.log(yamled)
const parsed = await yaml.parse(yamled)
console.log(parsed)

