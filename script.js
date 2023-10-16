const model = {
  tarefas: [],
  adicionarTarefa: function(tarefa) {
      this.tarefas.push({ texto: tarefa, concluida: false });
  },
};

const view = {
  renderizarListaDeTarefas: function() {
      const listaDeTarefas = document.getElementById("lista-de-tarefas");
      listaDeTarefas.innerHTML = "";
      model.tarefas.forEach((tarefa, index) => {
          const li = document.createElement("li");
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = tarefa.concluida;
          checkbox.addEventListener("change", () => controller.alternarTarefa(index));
          li.appendChild(checkbox);
          const textoDaTarefa = document.createElement("span");
          textoDaTarefa.textContent = tarefa.texto;
          if (tarefa.concluida) {
              textoDaTarefa.style.textDecoration = "line-through";
              textoDaTarefa.style.color = "#ccc";
          }
          li.appendChild(textoDaTarefa);
          listaDeTarefas.appendChild(li);
      });
  },
};

const controller = {
  adicionarTarefa: function() {
      const inputTarefa = document.getElementById("nova-tarefa");
      const textoTarefa = inputTarefa.value.trim();
      if (textoTarefa !== "") {
          model.adicionarTarefa(textoTarefa);
          inputTarefa.value = "";
          view.renderizarListaDeTarefas();
      }
  },
  alternarTarefa: function(index) {
      model.tarefas[index].concluida = !model.tarefas[index].concluida;
      view.renderizarListaDeTarefas();
  },
};

document.getElementById("adicionar-tarefa").addEventListener("click", controller.adicionarTarefa);
view.renderizarListaDeTarefas();
