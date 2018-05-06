<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="WEIKI 网络科技 WEIKI网络科技 网站建设">
  <meta name="keyword" content="WEIKI 网络科技 WEIKI网络科技 网站建设">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="/css/bootstrap.min.css" />
  <link href="/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <link href="/css/elegant-icons.css" rel="stylesheet" type="text/css">
  <script src="/fonts/alibaba/iconfont.js"></script>
  <link href="/css/main.css" rel="stylesheet" type="text/css">
  <link href="/css/my-custom-styles.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Raleway:700,400,400italic,500" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400italic,700,300,300italic" rel="stylesheet" type="text/css">
  <link rel="shortcut icon" href="/ico/favicon.ico">
  <link rel="stylesheet" href="/css/swiper.min.css">
  <link rel="stylesheet" href="/css/hover-effects.css">
  <title>{{$title}} - @yield('title')</title>
</head>
<body>
    <div id="wrapper">
        @component('components.nav')

        @endcomponent
        
        @yield('content')

        
        @include('global.right-nav')
        @include('global.footer')
    </div>

    <script src="https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="/javascripts/app.js"></script>
    <script src="/javascripts/plugins/easing/jquery.easing.min.js"></script>
    <script src="/javascripts/plugins/morphext/morphext.min.js"></script>
    <script src="/javascripts/plugins/owl-carousel/owl.carousel.min.js"></script>
    <script type="text/javascript" src="javascripts/bootstrap.min.js"></script>
    <script src="/javascripts/bravana-lite.js"></script>
</body>
</html>