export const data = [
  {name: '文章', id: 0},
  {name: '文章', id: 1},
  {name: '文章', id: 2},
  {name: '文章', id: 3},
  {name: '文章', id: 4},
  {name: '文章', id: 5},
  {name: '文章', id: 6},
  {name: '文章', id: 7},
  {name: '文章', id: 8}
]
export const bb = {
  responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 200,
        color: '#48F2E3',
        connectParticles: false
      }
    }, {
      breakpoint: 425,
      options: {
        maxParticles: 100,
        connectParticles: true
      }
    }, {
      breakpoint: 320,
      options: {
        maxParticles: 0

        // disables particles.js
      }
    }
  ]
}
