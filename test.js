function delay(msg) {
    return new Promise((resolve) => {
      setTimeout(() => {
          console.log(msg)
          resolve()
      }, 3000)
    })
}

function*test() {
    yield delay('早上7点起床')
    yield delay('中午12点半午睡')
}

const iterator = test()
//执行第一步
iterator.next()
//在执行下一步
iterator.next()