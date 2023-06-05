import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function NewProduct(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  async function createProduct(ev){
    ev.preventDefault();

    const data = {title, description, price}
    await axios.post('/api/products', data);
  }

  return (
    <Layout>
      <form onSubmit={createProduct}>

        <h1>Novo Produto</h1>
        
        <label>Nome do Produto</label>
        <input 
          type="text" 
          placeholder="Nome do Produto" 
          value={title} 
          onChange={ev => setTitle(ev.target.value)}
        />
        
        <label>Descrição</label>
        <textarea 
          placeholder="Descrição" 
          value={description}
          onChange={ev => setDescription(ev.target.value)}
        />

        <label>Preço</label>
        <input 
          type="number"
          placeholder="Preço"
          onChange={ev => setPrice(ev.target.value)}
        />
        
        <button 
          type="submit"
          className="btn-primary">
          Salvar
        </button>
      </form>
    </Layout>
  )
}