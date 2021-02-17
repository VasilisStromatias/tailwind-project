module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {

      backgroundImage:{
        'headerimage': "url('/images/bg.png')",
        'secondimage': "url('/images/bgpage2.png')"
      },

      fontSize:{
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '18': '18px',
        '22': '22px',
        '24': '24px',
        '26': '26px',
        '30': '30px',
        '34': '34px',
        '48': '48px'
      },

      textColor:{
        'mainblue':'#002868',
        'mainred':'#BF0A30'
      },

      backgroundColor:{
        'mainblue': '#002868',
        'mainred':'#BF0A30'
      },

      lineHeight:{
        '25':'25px',
        '30':'30px'

      },

      margin:{
        '5':'5px',
        '10': '10px',
        '15': '15px',
        '20': '20px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '60': '60px',       
        '70': '70px',
        '80': '80px',
        '90': '90px',
        '100': '100px',
        '110': '110px',
        '240': '240px',
      },

      padding:{
        '10':'10px',
        '20':'20px',
        '30':'30px',
        '40':'40px',
        '280': '280px',
      },

      width:{
        '45': '45px',
        '85': '85px',
        '150': '150px',
        '180': '180px',
        '198': '198px',
        '200': '200px',
        '230': '230px',
        '280': '280px',
        '300': '300px',
        '385': '385px',
        '400': '400px',
        '440': '440px',
        '450': '450px',       
        '465': '465px',
        '475': '475px',
        '620': '620px',
        '740': '740px',
        '1240': '1240px',

      },

      maxWidth:{
        '1360':'1360px'
      },

      height:{
        '32': '32px',
        '45': '45px',
        '48': '48px',
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '130': '130px',
        '180': '180px',
        '235': '235px',
        '245': '245px',
        '280': '280px',
        '300': '300px',
        '400': '400px',
        '415': '415px',
        '450': '450px',
        '465': '465px',
        '650': '650px',
        '750': '750px',
      },

      borderWidth:{
        DEFAULT: '1px',
        '2': '2px',
        '6': '6px',
        '10': '10px',
      },

      borderColor:{
        'mainred':'#AB0427'
      },

      translate:{
        '0.90':'90%'

      },

      inset:{
        '50':'50px',
        '5%':'5%',
        '10%':'10%',
        '15%':'15%',
        '50%':'50%',
        '85%':'85%',
        '90%':'90%',
      },

      letterSpacing:{
        '2':'2px'
      },

      fontFamily:{
        'proxima':'ProximaNova',
        'source':'SourceSansPro'
      }

    },

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
