class MainMemory:
    def __init__(self):
        # self.clean()
        self.loaded_memory = []
        pass

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        retorno = self.loaded_memory[index]
        if isinstance(retorno, str):
            return int(retorno)
        return 0

    # def clean(self):
    #     self.loaded_memory = []
