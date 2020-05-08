<template>
  <div id="app">
    <Home ref="home" @move="move"></Home>
    <PageAbout ref="about"></PageAbout>
    <Skills ref="skills"></Skills>
    <Project ref="project"></Project>
    <Contact ref="contact"></Contact>
  </div>
</template>

<script>
  import Home from './components/Home'
  import PageAbout from './components/PageAbout'
  import Skills from './components/Skills'
  import Project from './components/Project'
  import Contact from './components/Contact'

  export default {
    name: 'App',
    components: {
      Home,
      PageAbout,
      Skills,
      Project,
      Contact,
    },
    methods: {
      move(menu) {
        let pos

        switch (menu) {
          case 'Home':
            pos = 0
            break
          case 'About':
            pos = this.$refs.home.$el.clientHeight
            break
          case 'Skills':
            pos =
              this.$refs.home.$el.clientHeight + this.$refs.about.$el.clientHeight
            break
          case 'Project':
            pos =
              this.$refs.home.$el.clientHeight +
              this.$refs.about.$el.clientHeight +
              this.$refs.skills.$el.clientHeight
            break
          case 'Contact':
            pos =
              this.$refs.home.$el.clientHeight +
              this.$refs.about.$el.clientHeight +
              this.$refs.skills.$el.clientHeight +
              this.$refs.project.$el.clientHeight
            break
        }

        window.scroll({ top: pos, left: 0, behavior: 'smooth' })
      },
    },
  }
</script>

<style lang="scss">
  #app {
    width: 100%;
    height: 100%;
    font-family: 'Spoqa Han Sans Regular';
  }
</style>
