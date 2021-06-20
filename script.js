(() => {

    const closebtn = () => {
        const close = document.querySelectorAll('.close');
        close.forEach(cls => {
            cls.addEventListener('click', (e) => {
                const element = e.currentTarget.parentNode;
                element.remove();
                document.querySelector('.page.active').remove();
            })
        });
    }

    const tabsAction = () => {
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', function () {
                tabs.forEach(mytab => {
                    mytab.classList.remove('active');
                });
                tab.classList.add('active');
                const page = document.querySelectorAll('.page');
                page.forEach(pg => {
                    pg.classList.remove('active');
                });
                const activePage = document.getElementById(tab.dataset.frm)
                activePage.classList.add('active');
            });
        });
        closebtn();
    }


    const check = () => {
        document.querySelector('.page').firstChild !== null ? console.log(document.querySelector('.page').firstChild) : ''
    }

    const itemClick = () => {
        const ul = document.querySelectorAll('.item');
        ul.forEach(li => {
            li.addEventListener('click', function (e) {
                e.preventDefault();
                const newtab = document.createElement('div');
                newtab.className = 'tab'
                newtab.setAttribute('data-frm', li.dataset.formname);
                newtab.innerHTML = li.dataset.formname;

                const close = document.createElement('div');
                close.className = "close";
                close.innerHTML = "×";
                newtab.appendChild(close);

                document.querySelector('.tabGtoups').append(newtab);
                const newpage = document.createElement('div');
                newpage.className = 'page';
                newpage.id = li.dataset.formname
                newpage.innerHTML = "I am Page " + li.dataset.formname
                document.querySelector('.pages').append(newpage);
                tabsAction();
            })
        });
        tabsAction();
        check();
    }
    itemClick();


})();
