<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand text-primary" href="index.php" aria-current="page">TFT Statistics</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu"
                        aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="mainMenu">
                    <form class="d-flex">
                        <select class="form-select w-25" aria-label="Select Region">
                            <option value="KR" selected>KR</option>
                            <option value="NA">NA</option>
                        </select>
                        <input class="form-control me-2" type="search" placeholder="Search Summoner Name"
                               aria-label="Search"
                               title="Search" style="font-size: 14px">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="mainMenu">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">가이드</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">추천 메타</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-danger" href="#">천상계 덱</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">아이템 통계</a>
                        </li>
                        <li class="nav-item b-sm-none"><a class="nav-link vertical-line text-secondary"></a></li>
                        <li>
                            <hr class="dropdown-divider text-light">
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-warning" href="#">시즌4.5 프리뷰</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">순위표</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">즐겨찾기</a>
                        </li>
                        <li class="nav-item b-sm-none"><a class="nav-link vertical-line text-secondary"></a></li>
                        <li>
                            <hr class="dropdown-divider text-light">
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">챔피언</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">시너지</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">아이템</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">족보</a>
                        </li>
                        <li class="nav-item b-sm-none"><a class="nav-link vertical-line text-secondary"></a></li>
                        <li>
                            <hr class="dropdown-divider text-light">
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">배치툴</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">시뮬레이터</a>
                        </li>
                        <li class="nav-item b-sm-none"><a class="nav-link vertical-line text-secondary"></a></li>
                        <li>
                            <hr class="dropdown-divider text-light">
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">커뮤니티</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>