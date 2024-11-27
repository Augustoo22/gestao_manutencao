var builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("http://0.0.0.0:50");

// Add services to the container.
builder.Services.AddControllersWithViews();

// Adicionando Swagger ao serviço
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configurando CORS para permitir acesso de http://localhost:8080
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowSwaggerUI", policy =>
    {
        policy.WithOrigins("http://localhost:8080")
              .AllowAnyHeader()
              .AllowAnyMethod()
              .AllowCredentials(); // Permite credenciais se necessário
    });
});

var app = builder.Build();

// Aplicando o middleware de CORS antes dos outros middlewares
app.UseCors("AllowSwaggerUI");

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
    app.UseHsts();
}
else
{
    // Configurando Swagger apenas para o ambiente de desenvolvimento
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Minha API V2");
        c.RoutePrefix = "swagger";
    });
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

app.Run();
