let inner =  `<span class="body-content-item-img">
                        <a href="#" terget="_blank"><img src="../golbal/img/logo.jpg" alt="测试" title="测试"></a>
                        </span>
                        <span class="body-content-item-describe">
                            <p>产品名称</p>
                            <p>产品简单描述</p>
                            <p>this is a test item,and abc dce ,gspsdf sdgs sgsdgs dsggd sdgsdgv sgdsg sgd bsdgsgf sgdsgd sgsdgsd sgdsg d</p>
                            
                    </span>`;
        let itembox = document.getElementById('body-content-main');
        let content = document.createDocumentFragment();
        
        let item   = document.createElement('div');
        // item.addClass('body-content-item');
        item.setAttribute('class', 'body-content-item');
        item.innerHTML=inner;

        for(let i = 0; i<100;i++){
             content.appendChild(item.cloneNode(true));
        }

itembox.appendChild(content);