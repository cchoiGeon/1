exports.div = `
<div id="layoutSidenav_content">
<main>
    <div class="container-fluid px-4">
        <h1 class="mt-4">신고하기</h1>
        <div class="card mb-4">
            <div class="card-body">
                장시간 자리를 비우거나 퇴실을 누르지 않거나 강의실을 예약한 뒤 입실하지 않은 사용자를 신고 해주시길 바랍니다
            </div>
        </div>
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table me-1"></i>
                해당 건물
            </div>
        </div>
        <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              해당 건물
            </a>
          
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">A동</a></li>
              <li><a class="dropdown-item" href="#">B동</a></li>
              <li><a class="dropdown-item" href="#">C동</a></li>
              <li><a class="dropdown-item" href="#">D동</a></li>
              <li><a class="dropdown-item" href="#">E동</a></li>
              <li><a class="dropdown-item" href="#" onclick="sanyoung();">산학융합관</a></li>

            </ul>
          </div>
        <div class="card mb-4">
        <form action="report_process">
            <table border="1" width=500 class="table" style="display:none;" id="sanyoung">
                <tr>
                    <th colspan="2">
                        산학융합관
                    </th>
                </tr>
                <tr>
                    <td width=50>
                        <select>
                            <option>강의실을 선택해주세요</option>
                            <option value="sangyoung201">201호</option>
                            <option value="sangyoung202">202호</option>
                            <option value="sangyoung203">203호</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" height=400>
                        <textarea placeholder="내용을 입력하세요." style="width: 500%; height: 100%"></textarea>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" align=right>
                        <input type="submit" value="신고하기">
                        <input type="button" value="뒤로가기">
                    </td>
                </tr>
            </table>
        </form>
        </div>
    </div>
</main>
<footer class="py-4 bg-light mt-auto">
    <div class="container-fluid px-4">
        <div class="d-flex align-items-center justify-content-between small">
            <div class="text-muted">Copyright &copy; Your Website 2022</div>
            <div>
                <a href="#">Privacy Policy</a>
                &middot;
                <a href="#">Terms &amp; Conditions</a>
            </div>
        </div>
    </div>
</footer>
</div>
</div>
`
exports.script = `
<script>
    function sanyoung(){
        var sanyoung = document.getElementById('sanyoung');
        if(sanyoung.style.display == 'block'){
            sanyoung.style.display = 'none';
        }
        else{
            sanyoung.style.display = 'block';
        }
    }
</script>
`