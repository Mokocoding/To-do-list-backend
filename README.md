# Todolist 백엔드 개발을 위한 레퍼지토리

- commit 규칙
    - 이름 : 작업내용
    - ex. biho : readme 파일 수정

- branch 관리 전략
    - git flow 를 기본적으로 따르되, release, hotfix 브랜치는 사용하지 않는다.
    - main : 배포용 브랜치
    - devlop : 개발용 브랜치
    - feature : 기능개발 브랜치 ex. biho/post
    
## API 명세

### 게시글 전체 조회 
- URL : /api/posts
- Method : GET
- Headers : "Content-type" : "application/json; charset=utf-8"
- Response
    - Status : 200
    ```
    [
        {
            "id": 1,
            "title": "string",
            "description": "string",
            "target_date": "2023-07-26",
            "created_at": "2023-07-25T17:48:21.000Z"
            
        }
    ]
    ```
---
### 게시글 생성
- URL : /api/posts
- Method : POST
- Headers : "Content-type" : "application/json; charset=utf-8"
- Request body 
    ```
    {
        title : "string",
        description : "string"
    }
    ```
- Response
    - Status : 201
        ```
        {
            "id": 1,
            "description": "string",
            "target_date": "2023-07-26"
        }
        ```
---