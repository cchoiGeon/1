exports.repeat = function(thiscss,loginbutton = `<li><a class="dropdown-item" href="/login">로그인</a></li>
<li><a class="dropdown-item" href="/register">회원가입</a></li>`,logoutbutton='',body,thisscript2,thisscript){
    return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="" />
            <meta name="author" content="" />
            <title>한국공학대학교</title>
            <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />
            <link href="css/styles.css" rel="stylesheet" />
            <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
            ${thiscss}
        </head>
        <body class="sb-nav-fixed">
            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                <!-- Navbar Brand-->
                <a class="navbar-brand ps-3" href="/"><img src="/logo.png" alt="한국공대로고" width="200px"></a>
                <!-- Sidebar Toggle-->
                <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
                <!-- Navbar Search-->
                <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                </form>
                <!-- Navbar-->
                <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            ${loginbutton}
                            ${logoutbutton}
                        </ul>
                    </li>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div class="sb-sidenav-menu">
                            <div class="nav">
                                <div class="sb-sidenav-menu-heading">Core</div>
                                <a class="nav-link" href="/">
                                    <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
                                    Home
                                </a>
                                <div class="sb-sidenav-menu-heading">Interface</div>
                                <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
                                    메인
                                    <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                </a>
                                <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                    <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                                            빈 강의실 찾기 
                                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                        </a>
                                        <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                            <nav class="sb-sidenav-menu-nested nav">
                                                <a class="nav-link" href="/A">A동</a>
                                                <a class="nav-link" href="/B">B동</a>
                                                <a class="nav-link" href="/C">C동</a>
                                                <a class="nav-link" href="/D">D동</a>
                                                <a class="nav-link" href="/E">E동</a>
                                                <a class="nav-link" href="/sangyoung">산학융합관</a>
                                            </nav>
                                        </div>
                                    </nav>
                                </div>
                                <div class="sb-sidenav-menu-heading">Addons</div>
                                <a class="nav-link" href="/report">
                                    <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
                                    신고하기
                                </a>
                                <a class="nav-link" href="/board">
                                    <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                    게시판
                                </a>
                                <a class="nav-link" href="/map">
                                    <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                                    지도
                                </a>
                                <!-- 이거 최신화 시켜줘야됨 INDEX한테만 적용되어있음 -->
                                
                            </div>
                        </div>
                        <div class="sb-sidenav-footer">
                            <div class="small">Logged in as:</div>
                            Start Bootstrap
                        </div>
                    </nav>
                </div>
                ${body} //내용 넣기
            ${thisscript2}
            ${thisscript}
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
    </body>
</html>
`
}



    //exports.event = function(thiscss,body,thisscript){
    //     return `<!DOCTYPE html>
    // <html lang="en">
    //     <head>
    //         <meta charset="utf-8" />
    //         <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    //         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    //         <meta name="description" content="" />
    //         <meta name="author" content="" />
    //         <title>Dashboard - SB Admin</title>
    //         <link href="https://cdn.jsdelivr.net/npm/simple-datatables@latest/dist/style.css" rel="stylesheet" />
    //         <link href="css/styles.css" rel="stylesheet" />
    //         <script src="https://use.fontawesome.com/releases/v6.1.0/js/all.js" crossorigin="anonymous"></script>
    //         ${thiscss}
    //     </head>
    //     <body class="sb-nav-fixed">
    //         <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    //             <!-- Navbar Brand-->
    //             <a class="navbar-brand ps-3" href="https://www.tukorea.ac.kr/sites/tukorea/index.do"><img src="./logo.png" alt="한국공대로고" width="200px"></a>
    //             <!-- Sidebar Toggle-->
    //             <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i class="fas fa-bars"></i></button>
    //             <!-- Navbar Search-->
    //             <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
    //             </form>
    //             <!-- Navbar-->
    //             <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
    //                 <li class="nav-item dropdown">
    //                     <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
    //                     <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
    //                         <li><a class="dropdown-item" href="/login">로그인</a></li>
    //                         <li><a class="dropdown-item" href="/register">회원가입</a></li>
    //                         <li><hr class="dropdown-divider" /></li>
    //                         <li><a class="dropdown-item" href="#!">로그아웃</a></li>
    //                     </ul>
    //                 </li>
    //             </ul>
    //         </nav>
    //         <div id="layoutSidenav">
    //             <div id="layoutSidenav_nav">
    //                 <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
    //                     <div class="sb-sidenav-menu">
    //                         <div class="nav">
    //                             <div class="sb-sidenav-menu-heading">Core</div>
    //                             <a class="nav-link" href="/">
    //                                 <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
    //                                 Home
    //                             </a>
    //                             <div class="sb-sidenav-menu-heading">Interface</div>
    //                             <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
    //                                 <div class="sb-nav-link-icon"><i class="fas fa-book-open"></i></div>
    //                                 메인
    //                                 <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
    //                             </a>
    //                             <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
    //                                 <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
    //                                     <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
    //                                         빈 강의실 찾기 
    //                                         <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
    //                                     </a>
    //                                     <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
    //                                         <nav class="sb-sidenav-menu-nested nav">
    //                                             <a class="nav-link" href="/A">A동</a>
    //                                             <a class="nav-link" href="/B">B동</a>
    //                                             <a class="nav-link" href="/C">C동</a>
    //                                             <a class="nav-link" href="/D">D동</a>
    //                                             <a class="nav-link" href="/E">E동</a>
    //                                             <a class="nav-link" href="/sangyoung">산학융합관</a>
    //                                         </nav>
    //                                     </div>
    //                                 </nav>
    //                             </div>
    //                             <div class="sb-sidenav-menu-heading">Addons</div>
    //                             <a class="nav-link" href="/report">
    //                                 <div class="sb-nav-link-icon"><i class="fas fa-chart-area"></i></div>
    //                                 신고하기
    //                             </a>
    //                             <a class="nav-link" href="/board">
    //                                 <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
    //                                 게시판
    //                             </a>
    //                             <a class="nav-link" href="/map">
    //                                 <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
    //                                 지도
    //                             </a>
    //                             <!-- 이거 최신화 시켜줘야됨 INDEX한테만 적용되어있음 -->
                                
    //                         </div>
    //                     </div>
    //                     <div class="sb-sidenav-footer">
    //                         <div class="small">Logged in as:</div>
    //                         Start Bootstrap
    //                     </div>
    //                 </nav>
    //             </div>
    //             ${body} //내용 넣기
    //         ${thisscript}
    //         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"></script>
    //         <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.min.js" crossorigin="anonymous"></script>
    //         <script src="https://cdn.jsdelivr.net/npm/simple-datatables@latest" crossorigin="anonymous"></script>
    //     </body>
    // </html>
    // `
    // }