import React from 'react'
import { Article } from '../../components'
import { foto01, foto02, foto03, foto04, foto05, foto06, foto07, foto08, foto09, foto10, foto11, foto12, foto13, foto14, foto15, foto16, foto17 } from './import'
import './blog.css'

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="rafas">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Com toda certeza as melhores fotos 👉🏿</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={foto01} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto02} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto03} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto04} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto06} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto07} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto08} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto09} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto10} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto11} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto12} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto13} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto14} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto15} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto16} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={foto17} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  )
}

export default Blog