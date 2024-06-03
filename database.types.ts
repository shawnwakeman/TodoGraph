export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      configurations: {
        Row: {
          config_key: string
          config_value: string
          id: number
        }
        Insert: {
          config_key: string
          config_value: string
          id?: number
        }
        Update: {
          config_key?: string
          config_value?: string
          id?: number
        }
        Relationships: []
      }
      issues: {
        Row: {
          assignee: number | null
          completed_at: string | null
          created_at: string
          creator_id: number
          cycle: number | null
          description: string
          due_date: string | null
          id: number
          name: string
          node_id: number | null
          priority: string | null
          project_id: number
          state: string | null
          tags: Json | null
        }
        Insert: {
          assignee?: number | null
          completed_at?: string | null
          created_at: string
          creator_id: number
          cycle?: number | null
          description: string
          due_date?: string | null
          id?: number
          name: string
          node_id?: number | null
          priority?: string | null
          project_id: number
          state?: string | null
          tags?: Json | null
        }
        Update: {
          assignee?: number | null
          completed_at?: string | null
          created_at?: string
          creator_id?: number
          cycle?: number | null
          description?: string
          due_date?: string | null
          id?: number
          name?: string
          node_id?: number | null
          priority?: string | null
          project_id?: number
          state?: string | null
          tags?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_issues_assignee"
            columns: ["assignee"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "fk_issues_creator"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "fk_issues_cycle"
            columns: ["cycle"]
            isOneToOne: false
            referencedRelation: "snapshots"
            referencedColumns: ["snapshot_id"]
          },
          {
            foreignKeyName: "fk_issues_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
        ]
      }
      node_target_states: {
        Row: {
          id: number
          node_id: number
          project_id: number
          snapshot_id: number
          target_state: string
        }
        Insert: {
          id?: number
          node_id: number
          project_id: number
          snapshot_id: number
          target_state: string
        }
        Update: {
          id?: number
          node_id?: number
          project_id?: number
          snapshot_id?: number
          target_state?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_node_target_states_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
          {
            foreignKeyName: "fk_node_target_states_snapshot"
            columns: ["snapshot_id"]
            isOneToOne: false
            referencedRelation: "snapshots"
            referencedColumns: ["snapshot_id"]
          },
        ]
      }
      nodes: {
        Row: {
          id: number
          initial_state: string | null
          name: string
          parent_id: number | null
          project_id: number
          state: string | null
          value: number
        }
        Insert: {
          id?: number
          initial_state?: string | null
          name: string
          parent_id?: number | null
          project_id: number
          state?: string | null
          value: number
        }
        Update: {
          id?: number
          initial_state?: string | null
          name?: string
          parent_id?: number | null
          project_id?: number
          state?: string | null
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_nodes_parent"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      project_users: {
        Row: {
          project_id: number
          project_user_id: number
          role: string | null
          user_id: number
        }
        Insert: {
          project_id: number
          project_user_id?: number
          role?: string | null
          user_id: number
        }
        Update: {
          project_id?: number
          project_user_id?: number
          role?: string | null
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_project_users_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
          {
            foreignKeyName: "fk_project_users_user"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      projects: {
        Row: {
          creator_id: number | null
          description: string | null
          project_id: number
          project_name: string
        }
        Insert: {
          creator_id?: number | null
          description?: string | null
          project_id?: number
          project_name: string
        }
        Update: {
          creator_id?: number | null
          description?: string | null
          project_id?: number
          project_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_projects_creator"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
        ]
      }
      snapshot_nodes: {
        Row: {
          name: string
          node_id: number
          parent_id: number | null
          snapshot_id: number
          state: string | null
          value: number
        }
        Insert: {
          name: string
          node_id: number
          parent_id?: number | null
          snapshot_id: number
          state?: string | null
          value: number
        }
        Update: {
          name?: string
          node_id?: number
          parent_id?: number | null
          snapshot_id?: number
          state?: string | null
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_snapshot_nodes_snapshot"
            columns: ["snapshot_id"]
            isOneToOne: false
            referencedRelation: "snapshots"
            referencedColumns: ["snapshot_id"]
          },
        ]
      }
      snapshot_ready_nodes: {
        Row: {
          id: number
          name: string
          parent_id: number | null
          project_id: number
          state: string | null
          value: number
        }
        Insert: {
          id?: number
          name: string
          parent_id?: number | null
          project_id: number
          state?: string | null
          value: number
        }
        Update: {
          id?: number
          name?: string
          parent_id?: number | null
          project_id?: number
          state?: string | null
          value?: number
        }
        Relationships: []
      }
      snapshots: {
        Row: {
          created_at: string
          project_id: number
          snapshot_id: number
        }
        Insert: {
          created_at?: string
          project_id: number
          snapshot_id?: number
        }
        Update: {
          created_at?: string
          project_id?: number
          snapshot_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "fk_snapshots_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["project_id"]
          },
        ]
      }
      summaries: {
        Row: {
          id: number
          node_id: number
          summary: Json | null
        }
        Insert: {
          id?: number
          node_id: number
          summary?: Json | null
        }
        Update: {
          id?: number
          node_id?: number
          summary?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_summaries_node"
            columns: ["node_id"]
            isOneToOne: true
            referencedRelation: "nodes"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          email: string
          name: string | null
          user_id: number
        }
        Insert: {
          email: string
          name?: string | null
          user_id?: number
        }
        Update: {
          email?: string
          name?: string | null
          user_id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      copy_nodes_to_snapshot:
        | {
            Args: {
              project_id_param: number
            }
            Returns: undefined
          }
        | {
            Args: {
              snapshot_id_param: number
              project_id_param: number
            }
            Returns: undefined
          }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
