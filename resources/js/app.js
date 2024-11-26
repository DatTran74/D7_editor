import './bootstrap';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Embed from '@editorjs/embed';
import Image from '@editorjs/image';
import Quote from '@editorjs/quote';
import f from '@editorjs/checklist';

let saveButton = document.getElementById('submit');

const editor = new EditorJS({
    /**
     * Id of Element that should contain Editor instance
     */
    holder: 'editorjs',
    tools: { 
         header: {
            class: Header, 
            inlineToolbar: ['link'] 
          }, 
        list:{ 
            class: List, 
            inlineToolbar: true 
          } 
        },
  });
  if(saveButton){
    saveButton.addEventListener('click', (e) => { 
       e.preventDefault();
      let  aTag= e.target;
      const url =aTag.getAttribute('href');
        console.log(url);
      editor.save().then((outputData) => {
        console.log('Article data: ', outputData)
      }).catch((error) => {
        console.log('Saving failed: ', error)
        });


        
    } ,false);
  }