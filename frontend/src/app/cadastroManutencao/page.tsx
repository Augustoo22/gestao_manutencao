"use client";
import Box from "@mui/material/Box";
import CustomTextField from "../components/customtextfield";
import { Aside } from "../components/aside";
import Button from "@mui/material/Button";
import React from "react";
import api from "../../config/axiosConfigManutencao";

export default function MaintenanceRegistrationForm() {
  const [formData, setFormData] = React.useState({
    idManutencao: "",
    carro: "",
    descricaoProblema: "",
    dataHoraInicio: "",
    dataHoraFim: "",
    equipeResponsavel: "",
  });

  // Mock dos carros e equipes
  const carros = [
    { value: "toyota_corolla", label: "Toyota Corolla" },
    { value: "honda_civic", label: "Honda Civic" },
    { value: "nissan_altima", label: "Nissan Altima" },
  ];

  const equipes = [
    { value: "equipe1", label: "Equipe 1" },
    { value: "equipe2", label: "Equipe 2" },
    { value: "equipe3", label: "Equipe 3" },
  ];

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Dados do formulário enviados:", formData);

    // Envia os dados via POST para a API
    api.post("api/manutencao", formData)
      .then((response) => {
        console.log("Manutenção criada com sucesso", response.data);
      })
      .catch((error) => {
        console.error("Erro ao criar manutenção", error);
      });
  };

  const handleClear = () => {
    setFormData({
      idManutencao: "",
      carro: "",
      descricaoProblema: "",
      dataHoraInicio: "",
      dataHoraFim: "",
      equipeResponsavel: "",
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Aside />

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          flex: 1,
          p: 2,
          display: "flex",
          flexDirection: "column",
          "& > :not(style)": { mb: 2, width: "80%" },
        }}
        noValidate
        autoComplete="off"
      >
        <CustomTextField
          id="idManutencao"
          label="ID da Manutenção"
          name="idManutencao"
          value={formData.idManutencao}
          onChange={handleChange}
        />
        <CustomTextField
          id="carro"
          label="Carro"
          name="carro"
          value={formData.carro}
          onChange={handleChange}
          options={carros}  // Carros mockados
        />
        <CustomTextField
          id="descricaoProblema"
          label="Descrição do Problema"
          name="descricaoProblema"
          value={formData.descricaoProblema}
          onChange={handleChange}
          multiline
          rows={4}
        />
        <CustomTextField
          id="dataHoraInicio"
          label="Data e Hora de Início"
          type="datetime-local"
          name="dataHoraInicio"
          value={formData.dataHoraInicio}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <CustomTextField
          id="dataHoraFim"
          label="Data e Hora de Fim (Previsto)"
          type="datetime-local"
          name="dataHoraFim"
          value={formData.dataHoraFim}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <CustomTextField
          id="equipeResponsavel"
          label="Equipe Responsável"
          name="equipeResponsavel"
          value={formData.equipeResponsavel}
          onChange={handleChange}
          options={equipes}  // Equipes mockadas
        />

        <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "red",
              color: "white",
              flex: 1,
              "&:hover": {
                backgroundColor: "#d32f2f",
              },
            }}
            type="submit"
          >
            Enviar
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "black",
              color: "white",
              flex: 1,
              "&:hover": {
                backgroundColor: "#424242",
              },
            }}
            onClick={handleClear}
          >
            Limpar
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
