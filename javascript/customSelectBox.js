        /* Custom Select box for city*/
        var select_logoImage = document.getElementById('selectImage');

        /* Adds an a click event for each select bar to signal if it is open */
        for (const dropdown of document.querySelectorAll(".bar__-select")) {
            dropdown.addEventListener('click', function() {
                this.querySelector('.bar__-custom-select').classList.toggle('open');
            this.querySelector('.bar__-select-trigger').classList.toggle('open');
            })
        }

        /* Adds a click event when an option is clicked. This changes the trigger text and changes the option */
        for (const option of document.querySelectorAll(".bar__-option")) {
            option.addEventListener('click', function() {
                if (!this.classList.contains('selected')) {
                    this.parentNode.querySelector('.bar__-option.selected').classList.remove('selected');
                    this.classList.add('selected');
                    this.closest('.bar__-custom-select').querySelector('.bar__-select-trigger span').textContent = this.textContent;
                    changeImage(this.textContent)
                }
            })
        }

        /* Changes the image in animal select bar based on choice */
        function changeImage(x){
            let srcName = x.substring(2,x.length).trim();
            let isValid = false;
            var validNames = ["Dog", "Cat", "Bird", "Reptile", "Rabbit"];
            validNames.forEach(element => {
                let result = element.localeCompare(srcName);
                if(result == 0){
                    isValid = true;
                }
            });
            if(isValid == true){
                select_logoImage.src = `./images/ICONS/searchbar/${srcName}.svg`;
            }
        }

        /* Adds an a click event for each select bar to check if no select bar targets were clicked thus closes select bar */
        window.addEventListener('click', function(e) {
            for (const select of document.querySelectorAll('.bar__-custom-select')) {
                if (!select.contains(e.target)) {
                    select.classList.remove('open');
                }
            }
            for (const trigger of document.querySelectorAll('.bar__-select-trigger')) {
                if (!trigger.contains(e.target)) {
                    trigger.classList.remove('open');
                }
            }
        });