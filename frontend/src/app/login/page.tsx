import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css';

export default function Login() {
  return (
    <div 
      className="h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: 'url(image/fundo.png)' }}
    >
      <div 
        className="flex p-10 rounded-xl shadow-2xl" 
        style={{ maxWidth: '900px', width: '90%', backgroundColor: '#444444', borderBottom: '4px solid #FF0000' }}
      >
        
        <div className="flex flex-col items-center justify-center w-1/2 border-r pr-8" style={{ borderColor: '#555555' }}>
          <div className="flex flex-col items-center mb-6">
            <img 
              src="image/logo.png" 
              alt="Logo" 
              className="w-64 h-64 object-contain" 
            />
          </div>
        </div>
        
        <div className="flex flex-col justify-center w-1/2 pl-8">
          <InputText 
            placeholder="Login" 
            className="mb-6 p-4 rounded-lg focus:outline-none text-lg"
            style={{ 
              backgroundColor: '#FFFFFF', 
              borderColor: '#FF0000', 
              borderWidth: '1px', 
              borderStyle: 'solid' 
            }}
          />

          <InputText 
            placeholder="Senha" 
            className="mb-6 p-4 rounded-lg border focus:outline-none text-lg"
            style={{ 
              backgroundColor: '#FFFFFF', 
              borderColor: '#666666', 
              borderWidth: '1px', 
              borderStyle: 'solid' 
            }}
            type='password'
          />
          <a 
            href="/dashboard" 
          >
            <Button
              label="Entrar"
              className="py-3 px-6 rounded-lg text-lg"
              style={{ 
                backgroundColor: '#FF0000', 
                color: '#FFFFFF', 
                border: 'none',        
                width: '100%',
                justifyContent: 'center', 
              }}
            />
          </a>
        </div>

      </div>
    </div>
  );
}
