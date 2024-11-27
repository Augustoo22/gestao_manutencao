var builder = WebApplication.CreateBuilder(args);

builder.WebHost.UseUrls("http://0.0.0.0:80");

// Add services to the container.
builder.Services.AddControllersWithViews();

// Adicionando Swagger ao serviço
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

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
        // Swagger da API atual
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Minha API V1");
        c.RoutePrefix = "swagger";

        // Swagger da outra API (backend2)
        c.SwaggerEndpoint("http://localhost:5050/swagger/v1/swagger.json", "Minha API V2");
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
