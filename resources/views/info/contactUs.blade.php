@extends('layouts.app')
@section('title','联系我们')
@section('content')
<div id="page-header-contact" class="page-header has-background-image">
    <div class="overlay"></div>
    <div class="container">
        <h1 class="page-title">关于我们</h1>
        <ol class="breadcrumb link-accent">
            <li>
                <a href="">首页</a>
            </li>
            <li>
                <a href="">关于我们</a>
            </li>
        </ol>
    </div>
</div>
<div class="page-content no-margin-bottom">
    <div class="container">
        <div class="row">
            <div class="col-md-9">
                <p>Phosfluorescently转换渐进交付物，而电子商务技术。独特的目标是积极的 人力资本，而不是面向未来的全面联系。合作主导有影响力的合作关系和无处 不在的社区。专业制定相互依赖的外包，而不是仅仅在时间上紧迫。独一无二
                    地协调质量，全面链接而不会有可靠的结果。
                </p>
                <br>
                <form id="contact-form" method="post" class="form-horizontal">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="contact-name" class="control-label sr-only">姓名</label>
                                <input id="contact-name" type="text" name="name" placeholder="姓名*" required=""
                                    class="form-control">
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="contact-email" class="control-label sr-only">邮箱</label>
                                <input id="contact-email" type="email" name="email" placeholder="邮箱*" required=""
                                    class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="contact-subject" class="control-label sr-only">主题</label>
                        <div class="col-sm-12">
                            <input id="contact-subject" type="text" name="subject" placeholder="主题" class="form-control">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="contact-message" class="control-label sr-only">内容</label>
                        <div class="col-sm-12">
                            <textarea id="contact-message" name="message" rows="5" cols="30" placeholder="内容" required="" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="col-sm-12">
                            <button id="submit-button" type="submit" class="btn btn-primary">
                                <i class="fa loading-icon"></i>
                                <span>发送消息</span>
                            </button>
                        </div>
                    </div>
                    <input id="msg-submitted" type="hidden" name="msg-submitted" value="true">
                </form>
            </div>
            <div class="col-md-3">
                <div class="sidebar">
                    <div class="widget">
                        <h4 class="widget-title">联系方式</h4>
                        <address class="contact-info">
                            <p>
                                <i class="icon icon_pin_alt ico-styled text-primary"></i>1234 North Main Street New York, NY 22222</p>
                            <p>
                                <i class="icon icon_phone ico-styled text-primary"></i>(1800) 765 - 4321</p>
                            <p>
                                <i class="icon icon_mail_alt ico-styled text-primary"></i>email@yourdomain.com</p>
                        </address>
                    </div>
                </div>
            </div>
        </div>
        <div id="allmap"></div>
    </div>
</div>
<script src="http://api.map.baidu.com/api?v=2.0&amp;ak=egb5Zt1clDlnNeDxLAxAlNqyAKEV9qhv"></script>
<script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&amp;ak=egb5Zt1clDlnNeDxLAxAlNqyAKEV9qhv&amp;services=&amp;t=20180427194914"></script>
@endsection
