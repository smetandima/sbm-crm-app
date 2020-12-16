import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Menu from './menu'

const Sidebar = () => {
  const dispatch = useDispatch()
  const theme = useSelector(state => state.theme)

  useEffect(() => {

    // Initialize theme 
    if (localStorage.getItem('the') === "dark") {
      document.body.classList.add("dark");
      document.addEventListener("DOMContentLoaded", function() {
        document.querySelector('.js-switch-theme input').checked = true;
      });
    }
 
    // Run jQuery functions 

    var link = $('.js-popup-open');
    link.magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        removalDelay: 200,
        callbacks: {
            beforeOpen: function beforeOpen() {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        }
    });

    var page = $('.page'),
        sidebar = $('.sidebar'),
        burgerSidebar = sidebar.find('.sidebar__burger'),
        user = sidebar.find('.sidebar__user'),
        close = sidebar.find('.sidebar__close'),
        header = $('.header'),
        burgerHeader = header.find('.header__burger'),
        searchOpen = header.find('.header__search'),
        search = $('.search');
        burgerSidebar.on('click', function () {
        page.toggleClass('toggle');
        sidebar.toggleClass('active');
    });

    burgerHeader.on('click', function () {
        page.toggleClass('toggle');
        sidebar.toggleClass('active');
        $('body').toggleClass('no-scroll');
        $('html').toggleClass('no-scroll');
    });

    close.on('click', function () {
        page.removeClass('toggle');
        sidebar.removeClass('active');
        $('body').removeClass('no-scroll');
        $('html').removeClass('no-scroll');
    });

    searchOpen.on('click', function () {
        searchOpen.toggleClass('active');
        search.toggleClass('show');
        $('.notifications').removeClass('active');
    });

    user.on('click', function () {
        $(this).toggleClass('active');
        $(this).prev().toggle();
    });

    $('.search__toggle').on('click', function () {
        $('.notifications').removeClass('active');
        $('.search').toggleClass('active');
    });

    $('.notifications__open').on('click', function () {
        $('.notifications').toggleClass('active');
        $('.search').removeClass('active');
        searchOpen.removeClass('active');
        search.removeClass('show');
    });

    var checkboxAll = $('.products__row_head .checkbox__input');
    checkboxAll.on('click', function () {
        if ($(this).is(':checked')) {
            $(this).parents('.products__table').find('.products__row:not(.products__row_head) .checkbox__input').prop('checked', true).attr('checked', 'checked');
        } else {
            $(this).parents('.products__table').find('.products__row:not(.products__row_head) .checkbox__input').prop('checked', false).removeAttr('checked');
        }
    });

    $('.schedules__item').on('click', function (e) {
        e.preventDefault();
        $('.schedules__item').removeClass('active');
        $(this).addClass('active');
    });
    
    $('.tabs__item').on('click', function (e) {
        e.preventDefault();
        $('.tabs__item').removeClass('active');
        $(this).toggleClass('active');
    });
    
    $('.tabs__link').on('click', function (e) {
        e.preventDefault();
        var t = $(this).attr('href');
        $('.tabs__link').removeClass('active');
        $(this).toggleClass('active');
        if($(this).hasClass('active')){
          $('.overview-widget').hide();
          $(t).fadeIn('slow');
        }
    });
    
    $('.inbox__item').on('click', function () {
        $('.inbox__item').removeClass('active');
        $(this).toggleClass('active');
    });
    
    $('.notification__item').on('click', function () {
        $('.notification__item').removeClass('active');
        $(this).toggleClass('active');
    });
    
    $('.activity__item').on('click', function () {
        $('.activity__item').removeClass('active');
        $(this).toggleClass('active');
    });
    
    // Chart functions
    // colors
    var blue = '#A0D7E7';
    var blueLight = '#0e97b5';
    var purple = '#6C5DD3';
    var white = '#ffffff';
    // var blueOpacity = '#e6efff';
    // var blueLight = '#50B5FF';
    var pink = '#FFB7F5';
    // var orangeOpacity = '#fff5ed';
    var yellow = '#FFCE73';
    var green = '#7FBA7A';
    var red = '#FF754C';
    // var greenOpacity = '#ecfbf5';
    var gray = '#808191';
    var grayOpacity = '#f2f2f2';
    // var grayLight = '#E2E2EA';
    var borderColor = "#E4E4E4";
    // var text = "#171725";

    $(document).ready(function(){
      var options = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        series: [{
          name: 'Active users',
          data: [442, 380, 275, 430, 509, 463, 407, 533, 470]
        }],
        colors: [purple], 
        chart: {
          height: '100%',
          type: 'line',
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          }
        },
        grid: {
          borderColor: borderColor,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        tooltip: {
          enabled: false
        },
        stroke: {
          width: 2,
          curve: 'smooth'
        },
        xaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        }
      };

      var chart = document.querySelector('#chart-active-users');
      if (chart != null) {
        new ApexCharts(chart, options).render();
      }
    })

    $(document).ready(function(){
      var options = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'],
        series: [{
          name: 'New users',
          data: [400, 380, 240, 280, 390, 330, 175]
        }, {
          name: 'Users',
          data: [100, 0, 0, 0, 60, 0, 20]
        }],
        colors: [white, borderColor],
        chart: {
          height: '100%',
          type: 'bar',
          stacked: true,
          toolbar: {
            show: false
          }
        },
        grid: {
          borderColor: borderColor,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          },
          padding: {
            top: 0,
            left: 10,
            right: 0,
            bottom: 0
          }
        },
        stroke: {
          curve: 'smooth'
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            endingShape: 'rounded',
            columnWidth: '10%'
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          x: {
            show: false
          },
          shared: true
        },
        xaxis: {
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            enabled: false
          }
        },
        yaxis: {
          axisBorder: {
            color: borderColor
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            enabled: false
          },
          labels: {
            style: {
              colors: white
            }
          }
        }
      };

      var chart = document.querySelector('#chart-users-counter');
      if (chart != null) {
        new ApexCharts(chart, options).render();
      }
    })

    $(document).ready(function(){
      var options = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        series: [{
          name: '',
          data: [35, 66, 34, 56, 18]
        }],
        colors: [blue],
        chart: {
          height: '100%',
          type: 'bar',
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          }
        },
        grid: {
          borderColor: borderColor,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        stroke: {
          curve: 'smooth'
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            columnWidth: '80%'
          }
        },
        states: {
          hover: {
            filter: {
              type: 'darken',
              value: 0.9
            }
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          shared: true
        },
        xaxis: {
          axisBorder: {
            show: false,
            color: borderColor
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            enabled: false
          }
        }
      };

      var chart = document.querySelector('#chart-users-blue');
      if (chart != null) {
        new ApexCharts(chart, options).render();
      }
    })
    // chart earning

    // chart affiliate impressions

    // chart active users

    // chart users counter

    // chart users blue color

    // chart users purple color
    $(document).ready(function(){
      var options = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        series: [{
          name: '',
          data: [25, 46, 64, 56, 28]
        }],
        colors: [purple],
        chart: {
          height: '100%',
          type: 'bar',
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          }
        },
        grid: {
          borderColor: borderColor,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        stroke: {
          curve: 'smooth'
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            columnWidth: '80%'
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          shared: true
        },
        xaxis: {
          axisBorder: {
            show: false,
            color: borderColor
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            enabled: false
          }
        }
      };

      var chart = document.querySelector('#chart-users-purple');
      if (chart != null) {
        new ApexCharts(chart, options).render();
      }
    })

    // chart income
    $(document).ready(function(){
      var options = {
        labels: ['Oct', 'Mar', 'Aug'],
        series: [{
          name: '',
          data: [95, 66, 44]
        }, {
          name: '',
          data: [72, 48, 38]
        }],
        colors: [purple, blue],
        chart: {
          height: '100%',
          type: 'bar',
          toolbar: {
            show: false
          }
        },
        states: {
          hover: {
            filter: {
              type: 'darken',
              value: 0.9
            }
          }
        },
        grid: {
          borderColor: borderColor,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          },
          padding: {
            top: 0,
            left: 15,
            right: 0,
            bottom: 0
          }
        },
        stroke: {
          curve: 'smooth'
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            columnWidth: '40%'
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          shared: true
        },
        xaxis: {
          axisBorder: {
            show: false,
            color: borderColor
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            enabled: false
          }
        }
      };

      var chart = document.querySelector('#chart-income');
      if (chart != null) {
        new ApexCharts(chart, options).render();
      }
    })

    // chart circle purple
    $(document).ready(function(){
      var options = {
        series: [40],
        chart: {
          height: '100%',
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '65%'
            },
            track: {
              background: grayOpacity,
              margin: 0
            },
            dataLabels: {
              show: false
            }
          }
        },
        fill: {
          colors: purple
        }
      };

      var chart = document.querySelector('#chart-circle-purple');
      if (chart != null) {
        new ApexCharts(chart, options).render();
      }
    })

    // chart circle green
    $(document).ready(function(){
      var options = {
        series: [62],
        chart: {
          height: '100%',
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '65%'
            },
            track: {
              background: grayOpacity,
              margin: 0
            },
            dataLabels: {
              show: false
            }
          }
        },
        fill: {
          colors: green
        }
      };

      var chart = document.querySelector('#chart-circle-green');
      if (chart != null) {
        new ApexCharts(chart, options).render();
      }
    })

    // chart circle red
    $(document).ready(function(){
      var options = {
        series: [75],
        chart: {
          height: '100%',
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '65%'
            },
            track: {
              background: grayOpacity,
              margin: 0
            },
            dataLabels: {
              show: false
            }
          }
        },
        fill: {
          colors: red
        }
      };

      var chart = document.querySelector('#chart-circle-red');
      if (chart != null) {
        new ApexCharts(chart, options).render();
      }
    })

    // chart circle yellow
    $(document).ready(function(){
      var options = {
        series: [35],
        chart: {
          height: '100%',
          type: 'radialBar'
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '65%'
            },
            track: {
              background: grayOpacity,
              margin: 0
            },
            dataLabels: {
              show: false
            }
          }
        },
        fill: {
          colors: yellow
        }
      };

      var chart = document.querySelector('#chart-circle-yellow');
      if (chart != null) {
        new ApexCharts(chart, options).render();
      }
    })

    // chart tabs
    $(document).ready(function(){
      var options = {
        labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        series: [{
          name: '',
          data: [25, 46, 99, 61, 75, 82, 43]
        }],
        colors: [blue],
        chart: {
          height: '100%',
          type: 'bar',
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: true
          }
        },
        grid: {
          borderColor: borderColor,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        stroke: {
          curve: 'smooth'
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            columnWidth: '80%'
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          shared: true
        },
        states: {
          hover: {
            filter: {
              type: 'darken',
              value: 0.9
            }
          }
        },
        xaxis: {
          axisBorder: {
            show: false,
            color: borderColor
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            enabled: false
          }
        }
      };

      var chart = document.querySelector('#chart-tabs');
      if (chart != null) {
        new ApexCharts(chart, options).render();
      }
    })

    // chart report
    $(document).ready(function(){
      var options = {
        labels: ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'],
        series: [{
          name: 'New users',
          data: [60, 25, 44, 37, 28]
        }, {
          name: 'Users',
          data: [40, 16, 38, 30, 25]
        }],
        colors: [purple, blue],
        chart: {
          height: '100%',
          type: 'bar',
          toolbar: {
            show: false
          }
        },
        grid: {
          borderColor: borderColor,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          },
          padding: {
            top: 0,
            left: 10,
            right: 0,
            bottom: 0
          }
        },
        states: {
          hover: {
            filter: {
              type: 'darken',
              value: 0.9
            }
          }
        },
        stroke: {
          curve: 'smooth'
        },
        dataLabels: {
          enabled: false
        },
        plotOptions: {
          bar: {
            columnWidth: '60%'
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          x: {
            show: false
          },
          shared: true
        },
        xaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            enabled: false
          }
        },
        yaxis: {
          axisBorder: {
            color: borderColor
          },
          axisTicks: {
            show: false
          },
          tooltip: {
            enabled: false
          }
        }
      };

      var chart = document.querySelector('#chart-report');
      if (chart != null) {
        new ApexCharts(chart, options).render();
      }
    })

    // chart earnings by item
    $(document).ready(function(){
      var options = {
        series: [22, 37, 41],
        colors: [purple, pink, borderColor],
        chart: {
          height: '100%',
          type: 'donut'
        },
        plotOptions: {
          pie: {
            donut: {
              size: '71%',
              polygons: {
                strokeWidth: 0
              }
            },
            expandOnClick: false
          }
        },
        dataLabels: {
          enabled: false
        },
        states: {
          hover: {
            filter: {
              type: 'darken',
              value: 0.9
            }
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          enabled: false
        }
      };

      var chart = document.querySelector('#chart-earnings-by-item');
      if (chart != null) {
        new ApexCharts(chart, options).render();
      }
    })


  }, [])

  useEffect(() => {
    // Switch theme
    localStorage.setItem('theme', theme)
    if(theme == 'dark'){
      document.body.classList.add('dark')
    }else{
      document.body.classList.remove('dark')
    }
  }, [theme])

  return (
    <>
      <div className="sidebar">
        <div className="sidebar__top">
          <button className="sidebar__close">
            <svg className="icon icon-close">
              <use xlinkHref="img/sprite.svg#icon-close" />
            </svg>
          </button>
          <Link href="/">
            <a className="sidebar__logo">
              <img className="sidebar__pic sidebar__pic_black" src="logo-dark.png" />
              <img className="sidebar__pic sidebar__pic_white" src="logo-white.png" />
            </a>
          </Link>
          <button className="sidebar__burger" />
        </div>
        <Menu />
        <div className="sidebar__bottom">
          <label className="switch switch_theme">
            <input className="switch__input" type="checkbox" onClick={ () => dispatch({type: 'SWITCH_THEME'}) } />
            <span className="switch__in">
              <span className="switch__box" />
              <span className="switch__icon">
                <svg className="icon icon-moon">
                  <use xlinkHref="img/sprite.svg#icon-moon" />
                </svg>
                <svg className="icon icon-sun">
                  <use xlinkHref="img/sprite.svg#icon-sun" />
                </svg>
              </span>
            </span>
          </label>
        </div>
      </div>
    </>
  )
}

export default Sidebar